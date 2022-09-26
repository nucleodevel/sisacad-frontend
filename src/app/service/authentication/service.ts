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

		var username = localStorage.getItem("username");
		var password = localStorage.getItem("password");
		var roles = localStorage.getItem("roles");

		if (username != null) {
			sessionUser.username = username;
		} else {
			return null;
		}

		if (password != null) {
			sessionUser.password = password;
		}

		if (roles != null) {
			sessionUser.roles = roles;
		}

		return sessionUser;
	}

	authenticate(username: string, password: string) {
		const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
		return this.http.get<UsuarioDto>(AppConfig.API_ENDPOINT + 'auth/validate', { headers }).pipe(
			map(
				userData => {
					localStorage.setItem('username', userData.username);
					localStorage.setItem('password', userData.password);
					localStorage.setItem('roles', userData.roles);

					let authString = 'Basic ' + btoa(username + ':' + password);
					localStorage.setItem('basicauth', authString);
				}
			),
			catchError(err => {
				return throwError(err);
			})

		);
	}

	isUserLoggedIn() {
		let user = localStorage.getItem('username')
		console.log(!(user === null))
		return !(user === null)
	}

	logOut() {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		localStorage.removeItem('roles');
	}

	hasRole(role: string) {
		var sessionUser = this.getSessionUser();

		if (sessionUser != null && sessionUser.getListRole() != null && sessionUser.getListRole().length > 0) {
			return sessionUser.getListRole().includes(role);
		}

		return false;
	}

}
