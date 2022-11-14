import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

import { AppConfig } from '../../app.config';

import { Usuario } from '../../domain/usuario/entity';
import { UsuarioDto } from '../../dto/usuario/dto';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	protected apiEndpoint: string = AppConfig.API_ENDPOINT;
	protected maxAcceptedInactivity: number = 12 * 60 * 60 * 1000;

	constructor(public http: HttpClient) {

	}

	getSessionUser() {
		var sessionUser: Usuario = new Usuario();

		var lastAccess = +this.getSessionItem('lastAccess');

		var username = this.getSessionItem('username');
		var password = this.getSessionItem('password');
		var nome = this.getSessionItem('nome');
		var email = this.getSessionItem('email');
		var roles = this.getSessionItem('roles');

		if (username != null) {
			sessionUser.username = username;
		} else {
			return null;
		}

		if (lastAccess != null) {
			sessionUser.lastAccess = lastAccess;
		}

		if (password != null) {
			sessionUser.password = password;
		}

		if (nome != null) {
			sessionUser.nome = nome;
		}

		if (email != null) {
			sessionUser.email = email;
		}

		if (roles != null) {
			sessionUser.roles = roles;
		}

		return sessionUser;
	}

	getSessionItem(key: string): string {
		return localStorage.getItem(key)!;
	}

	setSessionItem(key: string, value: string) {
		return localStorage.setItem(key, value);
	}

	authenticate(username: string, password: string) {
		const now = new Date();

		const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), skip: 'true' });
		return this.http.get<UsuarioDto>(AppConfig.API_ENDPOINT + 'auth/validate', { headers }).pipe(
			map(
				userData => {
					localStorage.setItem('lastAccess', '' + now.getTime());
					localStorage.setItem('username', userData.username);
					localStorage.setItem('password', userData.password);
					localStorage.setItem('nome', userData.nome);
					localStorage.setItem('email', userData.email);
					localStorage.setItem('roles', userData.roles);
				}
			),
			catchError(err => {
				return throwError(err);
			})

		);
	}

	isUserLoggedIn() {
		let lastAccess = +this.getSessionItem('lastAccess')
		let username = this.getSessionItem('username')

		const now = new Date();

		var isTimeExpired = lastAccess == null || now.getTime() - lastAccess > this.maxAcceptedInactivity;

		var isLoggedIn = !(username === null) && !isTimeExpired;

		if (isLoggedIn) {
			this.setSessionItem('lastAccess', '' + now.getTime());
		}

		return isLoggedIn;
	}

	logOut() {
		localStorage.removeItem('lastAccess');
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		localStorage.removeItem('nome');
		localStorage.removeItem('email');
		localStorage.removeItem('roles');
	}

	hasRole(role: string): boolean {
		var sessionUser = this.getSessionUser();

		if (sessionUser != null && sessionUser.getListRole() != null && sessionUser.getListRole().length > 0) {
			return sessionUser.getListRole().includes(role);
		}

		return false;
	}

	hasAnyRole(roles: string[]): boolean {
		var sessionUser = this.getSessionUser()!;

		var hasRole = false;
		if (sessionUser != null && sessionUser.getListRole() != null && sessionUser.getListRole().length > 0) {
			roles.forEach(role => {
				if (!hasRole && sessionUser.getListRole().includes(role)) {
					hasRole = true;
				}
			});
		}

		return hasRole;
	}

}
