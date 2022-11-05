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

	constructor(public http: HttpClient) {

	}

	getSessionUser() {
		var sessionUser: Usuario = new Usuario();

		var username = sessionStorage.getItem("username");
		var password = sessionStorage.getItem("password");
		var nome = sessionStorage.getItem("nome");
		var email = sessionStorage.getItem("email");
		var roles = sessionStorage.getItem("roles");

		if (username != null) {
			sessionUser.username = username;
		} else {
			return null;
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

	authenticate(username: string, password: string) {
		const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password), skip: "true" });
		return this.http.get<UsuarioDto>(AppConfig.API_ENDPOINT + 'auth/validate', { headers }).pipe(
			map(
				userData => {
					sessionStorage.setItem('username', userData.username);
					sessionStorage.setItem('password', userData.password);
					sessionStorage.setItem('nome', userData.nome);
					sessionStorage.setItem('email', userData.email);
					sessionStorage.setItem('roles', userData.roles);
				}
			),
			catchError(err => {
				return throwError(err);
			})

		);
	}

	isUserLoggedIn() {
		let user = sessionStorage.getItem('username')
		console.log(!(user === null))
		return !(user === null)
	}

	logOut() {
		sessionStorage.removeItem('username');
		sessionStorage.removeItem('password');
		sessionStorage.removeItem('nome');
		sessionStorage.removeItem('email');
		sessionStorage.removeItem('roles');
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
