import { Component, ViewChild, ElementRef } from '@angular/core';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

import { DiscenteService } from '../../../service/discente/service';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-aula-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaListComponent extends AbstractListComponent<Aula, AulaDto, AulaService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: AulaService, protected docenteService: DocenteService,
			protected discenteService: DiscenteService) {
		super(service, 'aula');
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
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO', 'ROLE_DOCENTE', 'ROLE_DISCENTE']);
	}

	public canAdd(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_DOCENTE']);
	}

	public canEdit(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_DOCENTE']);
	}

	/*
	 * Auxiliares
	 */

	reloadData() {
		if (this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO'])) {
			super.reloadData();
		} else if (this.authenticationService.hasRole('ROLE_DOCENTE')) {
			var username = localStorage.getItem("username")!;

			this.docenteService.findByUsername(username).subscribe(dataDocente => {
				var listDocente = this.docenteService.makeEntityArrayFromDtoArray(dataDocente);
				var docente = listDocente.length == 0 ? null : listDocente[0];

				if (docente == null) {
					this.entities = [];
				} else {
					this.docenteService.findAllAulaById(docente.id).subscribe(data => {
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

			this.discenteService.findByUsername(username).subscribe(dataDiscente => {
				var listDiscente = this.discenteService.makeEntityArrayFromDtoArray(dataDiscente);
				var discente = listDiscente.length == 0 ? null : listDiscente[0];

				if (discente == null) {
					this.entities = [];
				} else {
					this.discenteService.findAllAulaById(discente.id).subscribe(data => {
						this.entities = this.service.makeEntityArrayFromDtoArray(data);
					}, error => {
						this.setErrorMessage(error);
					});
				}


			}, errorDiscente => {
				this.setErrorMessage(errorDiscente);
			});

		}
	}

}