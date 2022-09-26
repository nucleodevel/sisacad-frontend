import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../service/authentication/service';

@Component({
	selector: 'container-nav',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class NavComponent implements OnInit {

	private mapMenuRoles: Map<string, Array<string>> =
		new Map([
			["PEDAGOGICO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE", "ROLE_VESTIBULANDO"]],
			["VESTIBULAR", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE", "ROLE_VESTIBULANDO"]],
			["GRADUACAO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			
			["ITEM_AULA", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_AVALIACAO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_AVALIACAO_VESTIBULANDO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_VESTIBULANDO"]],
			["ITEM_CURSO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE", "ROLE_VESTIBULANDO"]],
			["ITEM_DISCENTE", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_DISCIPLINA", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_DOCENTE", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_ESTRUTURA_CURRICULAR", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_OFERTA_CURSO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_OFERTA_DISCIPLINA", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_PARTICIPACAO_AULA", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_PARTICIPACAO_AVALIACAO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_TURMA", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE"]],
			["ITEM_USUARIO", ["ROLE_ADMIN"]],
			["ITEM_VESTIBULANDO", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_VESTIBULANDO"]],
			["ITEM_VESTIBULAR", ["ROLE_ADMIN", "ROLE_PEDAGOGICO", "ROLE_GRADUACAO", "ROLE_DISCENTE", "ROLE_DOCENTE", "ROLE_VESTIBULANDO"]]
		]);

	constructor(public authenticationService: AuthenticationService) {

	}

	ngOnInit() {

	}

	isVisibleMenu(menu: string) {

		var isVisible = false;

		if (menu == 'HOME') {
			isVisible = this.authenticationService.isUserLoggedIn();
		} else if (menu == 'LOGIN') {
			isVisible = !this.authenticationService.isUserLoggedIn();
		} else if (menu == 'USER') {
			isVisible = this.authenticationService.isUserLoggedIn();
		} else if (menu == 'LOGOUT') {
			isVisible = this.authenticationService.isUserLoggedIn();
		} else if (this.mapMenuRoles.has(menu)) {

			var listMenuRole: string[] = this.mapMenuRoles.get(menu) || [];
			var sessionRoles = localStorage.getItem("roles");

			if (listMenuRole != null && sessionRoles != null) {
				var listSessionRole = sessionRoles.split(",");

				listSessionRole.forEach(sessionRole => {
					listMenuRole.forEach(menuRole => {

						if (sessionRole == menuRole) {
							isVisible = true;
						}
					});
				});
			}
		}

		return isVisible;
	}

}