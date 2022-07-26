import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

import { TurmaService } from '../../../service/turma/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-discente-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteEditComponent extends AbstractEditComponent<Discente, DiscenteDto, DiscenteService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listaVestibulando!: Vestibulando[];
	listOfertaDisciplina!: OfertaDisciplina[];
	listOldSelectedOfertaDisciplina!: OfertaDisciplina[];
	listNotSelectedOfertaDisciplina!: OfertaDisciplina[];
	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	/*
	 * Constructors
	 */

	constructor(protected service: DiscenteService, protected route: ActivatedRoute,
		protected ofertaCursoService: OfertaCursoService,
		protected turmaService: TurmaService,
		protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected vestibulandoService: VestibulandoService) {

		super(service, route, 'discente');
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

	ngOnInitSuperAdditional(dto: DiscenteDto) {

		this.listOfertaDisciplina = [];
		this.listOldSelectedOfertaDisciplina = [];
		this.listNotSelectedOfertaDisciplina = [];
		this.listSelectedOfertaDisciplina = [];

		this.turmaService.findByDiscente(dto.id).subscribe(dataTurma => {
			this.turmaService.findAllOfertaDisciplinaById(dataTurma.id).subscribe(dataListaOfertaDisciplinaByTurma => {
				this.listOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(dataListaOfertaDisciplinaByTurma);
				this.service.findAllOfertaDisciplinaById(dto.id).subscribe(dataListaOfertaDisciplinaByDiscente => {
					this.listOldSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(dataListaOfertaDisciplinaByDiscente);
					this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(dataListaOfertaDisciplinaByDiscente);

					this.listOfertaDisciplina.forEach(item => {
						var exists = false;
						this.listSelectedOfertaDisciplina.forEach(slctItem => {
							if (item.id == slctItem.id) {
								exists = true;
							}
						});

						if (!exists) {
							this.listNotSelectedOfertaDisciplina.push(item);
						}
					});
				}, error => {
					this.setResultMessage("FAILURE", error);
				});
			}, error => {
				this.setResultMessage("FAILURE", error);
			});
		}, error => {
			this.setResultMessage("FAILURE", error);
		});

	}

	onSubmit() {
		var listDeleteOfertaDisciplina: OfertaDisciplina[] = [];
		var listInsertOfertaDisciplina: OfertaDisciplina[] = [];
		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);

		this.listOldSelectedOfertaDisciplina.forEach(oldItem => {
			var exists = false;
			this.listSelectedOfertaDisciplina.forEach(item => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listDeleteOfertaDisciplina.push(oldItem);
			}
		});

		this.listSelectedOfertaDisciplina.forEach(item => {
			var exists = false;
			this.listOldSelectedOfertaDisciplina.forEach(oldItem => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listInsertOfertaDisciplina.push(item);
			}
		});

		listDeleteOfertaDisciplina.forEach(item => {
			this.service.deleteOfertaDisciplina(this.id, item.id).subscribe();
		});

		listInsertOfertaDisciplina.forEach(item => {
			this.service.insertOfertaDisciplina(this.id, item.id).subscribe();
		});

		this.service.update(this.id, dto).subscribe(data => {
			this.list();
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	/*
	 * Form events
	 */

	setOfertaDisciplinaAsSelected(index: number) {
		var item = this.listNotSelectedOfertaDisciplina[index];
		this.listSelectedOfertaDisciplina.push(item);
		this.listNotSelectedOfertaDisciplina.splice(index, 1);
	}

	setOfertaDisciplinaAsNotSelected(index: number) {
		var item = this.listSelectedOfertaDisciplina[index];
		this.listNotSelectedOfertaDisciplina.push(item);
		this.listSelectedOfertaDisciplina.splice(index, 1);
	}

	/*
	 * Compare methods
	 */

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

}