import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../service/authentication/service';

import { Usuario } from '../../../domain/usuario/entity';

@Component({
	selector: 'app-login',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class LoginComponent implements OnInit {

	usuario : Usuario = new Usuario();
	password!: string;
	invalidLogin = false;

	errorMessage: string = "";

	constructor(private router: Router,
		private authenticationservice: AuthenticationService) { }

	ngOnInit() {
	}

	onSubmit() {
		this.authenticationservice.authenticate(this.usuario.username, this.usuario.password).subscribe(
			data => {
				this.router.navigate(['']);
				this.invalidLogin = false;
				
				this.router.navigate(['user']);
			},
			error => {
				this.invalidLogin = true;
				this.setErrorMessage("Erro no username ou password");
			}
		);
	}

	setErrorMessage(error: any) {
		if (error == null) {
			this.errorMessage = "";
			return;
		}

		var errorMessage: string = JSON.stringify(error);
		if (error.hasOwnProperty('error')) {
			if (error.error.hasOwnProperty('msg')) {
				errorMessage = JSON.stringify(error.error.msg);
			}
		}

		if (error.hasOwnProperty('message')) {
			if (error.message.includes('0 Unknown Error')) {
				errorMessage = "Problema na comunicação com o servidor!";
			}
		}

		console.error(JSON.stringify(errorMessage));

		this.errorMessage = errorMessage;
	}

}