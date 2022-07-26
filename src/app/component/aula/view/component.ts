import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

import { ParticipacaoAula } from '../../../domain/participacao-aula/entity';
import { ParticipacaoAulaService } from '../../../service/participacao-aula/service';

@Component({
	selector: 'app-aula-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaViewComponent extends AbstractViewComponent<Aula, AulaDto, AulaService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listSelectedParticipacaoAula!: ParticipacaoAula[];

	/*
	 * Constructors
	 */

	constructor(protected service: AulaService, protected route: ActivatedRoute,
		protected participacaoAulaService: ParticipacaoAulaService) {

		super(service, route, 'aula');
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

	ngOnInitSuperAdditional(dto: AulaDto) {

		this.service.findAllParticipacaoAulaById(dto.id).subscribe(data => {
			console.log(data);
			this.listSelectedParticipacaoAula = this.participacaoAulaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	/*
	 * Permissions
	 */

	public canList(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO', 'ROLE_DOCENTE', 'ROLE_DISCENTE']);
	}

	public canViewListParticipacao(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO', 'ROLE_DOCENTE']);
	}

}