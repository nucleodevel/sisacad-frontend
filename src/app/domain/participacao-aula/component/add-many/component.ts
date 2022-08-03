import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { ParticipacaoAula } from '../../entity/entity';
import { ParticipacaoAulaDto } from '../../dto/dto';
import { ParticipacaoAulaService } from '../../service/service';

import { Aula } from '../../../aula/entity/entity';
import { AulaService } from '../../../aula/service/service';

import { Discente } from '../../../discente/entity/entity';
import { DiscenteDto } from '../../../discente/dto/dto';
import { DiscenteService } from '../../../discente/service/service';

import { OfertaDisciplina } from '../../../oferta-disciplina/entity/entity';
import { OfertaDisciplinaService } from '../../../oferta-disciplina/service/service';

@Component({
	selector: 'app-participacao-aula-add-many',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAulaAddManyComponent extends AbstractAddComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> {

	entities!: ParticipacaoAula[];

	listAula!: Aula[];
	selectedAula!: Aula;

	listDiscente!: Discente[];
	listOldSelectedDiscente!: Discente[];
	listSelectedDiscente!: Discente[];

	constructor(protected service: ParticipacaoAulaService, protected router: Router,
		protected route: ActivatedRoute, protected aulaService: AulaService, protected discenteService: DiscenteService,
		protected ofertaDisciplinaService: OfertaDisciplinaService) {
		super(service, router, route, 'participacao-aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.aulaService.findAll().subscribe(data => {
			this.listAula = this.aulaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	onSubmit() {

		var listDeleteDiscente: Discente[] = [];
		var listInsertDiscente: Discente[] = [];

		this.listOldSelectedDiscente.forEach(oldItem => {
			var exists = false;
			this.listSelectedDiscente.forEach(item => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listDeleteDiscente.push(oldItem);
			}
		});

		this.listSelectedDiscente.forEach(item => {
			var exists = false;
			this.listOldSelectedDiscente.forEach(oldItem => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listInsertDiscente.push(item);
			}
		});

		listDeleteDiscente.forEach(item => {
			var dto!: ParticipacaoAulaDto;

			this.service.findByAulaAndDiscente(this.selectedAula.id, item.id).subscribe(data => {
				if (data.id != null) {
					this.service.delete(data.id).subscribe(data => {
						
					}, error => {
						this.setErrorMessage(error);
					});
				}
			}, error => {
				this.setErrorMessage(error);
			});
		});

		listInsertDiscente.forEach(item => {
			var dto: ParticipacaoAulaDto = new ParticipacaoAulaDto();
			dto.aula = this.selectedAula.id;
			dto.discente = item.id;

			this.service.insert(dto).subscribe(data => {
				
			}, error => {
				this.setErrorMessage(error);
			});
		});
		
		this.list();

	}

	onAulaChange(aula: Aula) {

		this.listDiscente = [];
		this.listOldSelectedDiscente = [];
		this.listSelectedDiscente = [];

		var ofertaDisciplina: OfertaDisciplina = aula.ofertaDisciplina;
		this.ofertaDisciplinaService.findAllDiscenteById(ofertaDisciplina.id).subscribe(data => {
			this.listDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});


		this.aulaService.findAllDiscenteParticipanteById(aula.id).subscribe(data => {
			this.listOldSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
			this.listSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareAula(o1: Aula, o2: Aula) {
		return o1.compare(o2);
	}

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

}