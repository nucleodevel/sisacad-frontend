import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../service/authentication/service';

import { Usuario } from '../../../domain/usuario/entity';

@Component({
	selector: 'authentication-user',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class UserComponent implements OnInit {

	user!: Usuario;
	lastAccess!: Date;

	constructor(private router: Router, private authenticationService: AuthenticationService) {

	}

	ngOnInit() {
		this.user = this.authenticationService.getSessionUser()!;

		var lastAccessTimestamp = this.authenticationService.getSessionLastAccess();

		if (lastAccessTimestamp != null) {
			this.lastAccess = new Date(this.authenticationService.getSessionLastAccess());
		}
	}

	isAdmin(): boolean {
		return this.authenticationService.hasRole('ROLE_ADMIN');
	}

}