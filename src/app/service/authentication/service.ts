import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor() { }

	authenticate(username: string, password: string) {
		console.log(username);
		if (username === "user01" && password === "password01") {
			console.log(username);
			localStorage.setItem('username', username)
			return true;
		} else {
			return false;
		}
	}

	isUserLoggedIn() {
		let user = localStorage.getItem('username')
		console.log(!(user === null))
		return !(user === null)
	}

	logOut() {
		localStorage.removeItem('username')
	}
}
