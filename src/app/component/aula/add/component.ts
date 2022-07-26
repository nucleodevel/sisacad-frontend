import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteService } from '../../../service/discente/service';

import { Docente } from '../../../domain/docente/entity';
import { DocenteService } from '../../../service/docente/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

import { ParticipacaoAulaDto } from '../../../dto/participacao-aula/dto';
import { ParticipacaoAulaService } from '../../../service/participacao-aula/service';

@Component({
	selector: 'app-aula-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaAddComponent extends AbstractAddComponent<Aula, AulaDto, AulaService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaOfertaDisciplina!: OfertaDisciplina[];

	listDiscente!: Discente[];
	listNotSelectedDiscente!: Discente[];
	listSelectedDiscente!: Discente[];

	/*
	 * Constructors
	 */

	constructor(protected service: AulaService, protected route: ActivatedRoute,
		protected docenteService: DocenteService,
		protected discenteService: DiscenteService,
		protected ofertaDisciplinaService: OfertaDisciplinaService,
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

	ngOnInitSuperAdditional() {

		if (this.authenticationService.hasAnyRole(['ROLE_ADMIN'])) {
			this.ofertaDisciplinaService.findAll().subscribe(data => {
				this.listaOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
			}, error => {
				this.setResultMessage("FAILURE", error);
			});
		} else if (this.authenticationService.hasRole('ROLE_DOCENTE')) {
			var sessionUser = this.getSessionUser();
			var username = sessionUser.username;

			this.docenteService.findByUsername(username).subscribe(dataDocente => {
				var listDocente = this.docenteService.makeEntityArrayFromDtoArray(dataDocente);
				var docente = listDocente.length == 0 ? null : listDocente[0];

				if (docente == null) {
					this.listaOfertaDisciplina = [];
				} else {
					this.docenteService.findAllOfertaDisciplinaById(docente.id).subscribe(data => {
						this.listaOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
					}, error => {
						this.setResultMessage("FAILURE", error);
					});
				}


			}, errorDocente => {
				this.setResultMessage("FAILURE", errorDocente);
			});

		}

	}

	/*
	 * Permissions
	 */

	public canList(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO', 'ROLE_DOCENTE', 'ROLE_DISCENTE']);
	}

	/*
	 * Form events
	 */

	onSubmit() {

		var entityId: number;

		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.insert(dto).subscribe(result => {
			entityId = result.id;

			this.listSelectedDiscente.forEach(item => {
				var participacaoAulaDto: ParticipacaoAulaDto = new ParticipacaoAulaDto();
				participacaoAulaDto.aula = entityId;
				participacaoAulaDto.discente = item.id;

				this.participacaoAulaService.insert(participacaoAulaDto).subscribe(data => {
					this.setResultMessage("SUCCESS", "Registrado com sucesso");
				}, error => {
					this.setResultMessage("FAILURE", error);
				});
			});

		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	onOfertaDisciplinaChange(ofertaDisciplina: OfertaDisciplina) {

		this.listDiscente = [];
		this.listNotSelectedDiscente = [];
		this.listSelectedDiscente = [];

		this.ofertaDisciplinaService.findAllDiscenteById(ofertaDisciplina.id).subscribe(data => {
			this.listDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
			this.listNotSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	setDiscenteAsSelected(index: number) {
		var item = this.listNotSelectedDiscente[index];
		this.listSelectedDiscente.push(item);
		this.listNotSelectedDiscente.splice(index, 1);
	}

	setDiscenteAsNotSelected(index: number) {
		var item = this.listSelectedDiscente[index];
		this.listNotSelectedDiscente.push(item);
		this.listSelectedDiscente.splice(index, 1);
	}

	/*
	 * Compare methods
	 */

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}