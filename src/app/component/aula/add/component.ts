import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteService } from '../../../service/discente/service';

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

	listaOfertaDisciplina!: OfertaDisciplina[];

	listDiscente!: Discente[];
	listNotSelectedDiscente!: Discente[];
	listSelectedDiscente!: Discente[];

	constructor(protected service: AulaService, protected router: Router,
		protected route: ActivatedRoute, protected discenteService: DiscenteService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected participacaoAulaService: ParticipacaoAulaService) {
		super(service, router, route, 'aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listaOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

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

				}, error => {
					this.setErrorMessage(error);
				});
			});
			
		}, error => {
			this.setErrorMessage(error);
		});

		this.list();

	}

	onOfertaDisciplinaChange(ofertaDisciplina: OfertaDisciplina) {

		this.listDiscente = [];
		this.listNotSelectedDiscente = [];
		this.listSelectedDiscente = [];

		this.ofertaDisciplinaService.findAllDiscenteById(ofertaDisciplina.id).subscribe(data => {
			this.listDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
			this.listNotSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
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

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}