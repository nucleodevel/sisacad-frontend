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

	constructor(private router: Router, private authenticationService: AuthenticationService) {

	}

	ngOnInit() {
		this.user = this.authenticationService.getSessionUser()!;
	}
	
	isAdmin(): boolean {
		return this.authenticationService.hasRole('ROLE_ADMIN');
	}

}