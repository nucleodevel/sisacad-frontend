import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

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
	selector: 'app-aula-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaEditComponent extends AbstractEditComponent<Aula, AulaDto, AulaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaOfertaDisciplina!: OfertaDisciplina[];

	listDiscente!: Discente[];
	listOldSelectedDiscente!: Discente[];
	listNotSelectedDiscente!: Discente[];
	listSelectedDiscente!: Discente[];

	constructor(protected service: AulaService,
		protected route: ActivatedRoute, protected discenteService: DiscenteService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected participacaoAulaService: ParticipacaoAulaService) {
		super(service, route, 'aula');
	}

	ngOnInit() {
		this.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional(dto: AulaDto) {

		this.listDiscente = [];
		this.listOldSelectedDiscente = [];
		this.listNotSelectedDiscente = [];
		this.listSelectedDiscente = [];

		this.ofertaDisciplinaService.findAllDiscenteById(dto.ofertaDisciplina).subscribe(result => {
			this.listDiscente = this.discenteService.makeEntityArrayFromDtoArray(result);

			this.service.findAllDiscenteParticipanteById(dto.id).subscribe(result => {
				this.listOldSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(result);
				this.listSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(result);

				this.listDiscente.forEach(item => {
					var exists = false;
					this.listSelectedDiscente.forEach(slctItem => {
						if (item.id == slctItem.id) {
							exists = true;
						}
					});

					if (!exists) {
						this.listNotSelectedDiscente.push(item);
					}
				});
			}, error => {
				this.setErrorMessage(error);
			});
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

			this.participacaoAulaService.findByAulaAndDiscente(this.entity.id, item.id).subscribe(data => {
				if (data.id != null) {
					this.participacaoAulaService.delete(data.id).subscribe(data => {

					}, error => {
						this.setErrorMessage(error);
					});
				}
			}, error => {
				this.setErrorMessage(error);
			});
		});

		listInsertDiscente.forEach(item => {
			var participacaoAulaDto: ParticipacaoAulaDto = new ParticipacaoAulaDto();
			participacaoAulaDto.aula = this.entity.id;
			participacaoAulaDto.discente = item.id;

			this.participacaoAulaService.insert(participacaoAulaDto).subscribe(data => {

			}, error => {
				this.setErrorMessage(error);
			});
		});

		super.onSubmit();

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