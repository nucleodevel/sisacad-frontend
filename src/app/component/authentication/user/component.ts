import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../../domain/usuario/entity';

@Component({
	selector: 'app-user',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class UserComponent implements OnInit {

	user: Usuario = new Usuario();
	
	basicauth!: string;

	constructor(private router: Router) {

	}

	ngOnInit() {
		var username = localStorage.getItem("username");
		var password = localStorage.getItem("password");
		var roles = localStorage.getItem("roles");
		var strBasicauth = localStorage.getItem("basicauth");

		if (username != null) {
			this.user.username = username;
		}

		if (password != null) {
			this.user.password = password;
		}

		if (roles != null) {
			this.user.roles = roles;
		}

		if (strBasicauth != null) {
			this.basicauth = strBasicauth;
		}
	}

}