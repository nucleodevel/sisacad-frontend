import { Component, ViewChild, ElementRef } from '@angular/core';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { AuthenticationService } from '../../../service/authentication/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-discente-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteListComponent extends AbstractListComponent<Discente, DiscenteDto, DiscenteService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: DiscenteService, protected docenteService: DocenteService) {

		super(service, 'discente');
	}

	/*
	 * Component methods
	 */

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional() {

	}

	/*
	 * Permissions
	 */

	public canView(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_GRADUACAO', 'ROLE_DOCENTE']);
	}

	public canAdd(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_GRADUACAO']);
	}

	public canEdit(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_GRADUACAO']);
	}

	/*
	 * Auxiliares
	 */

	reloadData() {
		if (this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_GRADUACAO'])) {
			super.reloadData();
		} else if (this.authenticationService.hasRole('ROLE_DOCENTE')) {
			var username = localStorage.getItem("username")!;

			this.docenteService.findByUsername(username).subscribe(dataDocente => {
				var listDocente = this.docenteService.makeEntityArrayFromDtoArray(dataDocente);
				var docente = listDocente.length == 0 ? null : listDocente[0];

				if (docente == null) {
					this.entities = [];
				} else {
					this.docenteService.findAllDiscenteById(docente.id).subscribe(data => {
						this.entities = this.service.makeEntityArrayFromDtoArray(data);
					}, error => {
						this.setErrorMessage(error);
					});
				}


			}, errorDocente => {
				this.setErrorMessage(errorDocente);
			});

		} else if (this.authenticationService.hasRole('ROLE_DISCENTE')) {
			var username = localStorage.getItem("username")!;

			this.docenteService.findByUsername(username).subscribe(dataDocente => {
				var listDocente = this.docenteService.makeEntityArrayFromDtoArray(dataDocente);
				var docente = listDocente.length == 0 ? null : listDocente[0];

				if (docente == null) {
					this.entities = [];
				} else {
					this.router.navigate(['/' + this.routerPrefix + '/view/' + docente.id]);
				}


			}, errorDocente => {
				this.setErrorMessage(errorDocente);
			});

		}
	}

}