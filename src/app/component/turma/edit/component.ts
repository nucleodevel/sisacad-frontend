import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Turma } from '../../../domain/turma/entity';
import { TurmaDto } from '../../../dto/turma/dto';
import { TurmaService } from '../../../service/turma/service';

import { OfertaCurso } from '../../../domain/oferta-curso/entity';
import { OfertaCursoService } from '../../../service/oferta-curso/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

@Component({
	selector: 'app-turma-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaEditComponent extends AbstractEditComponent<Turma, TurmaDto, TurmaService> {

	listaOfertaCurso!: OfertaCurso[];
	listOfertaDisciplina!: OfertaDisciplina[];
	listOldSelectedOfertaDisciplina!: OfertaDisciplina[];
	listNotSelectedOfertaDisciplina!: OfertaDisciplina[];
	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: TurmaService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected route: ActivatedRoute, protected ofertaCursoService: OfertaCursoService) {
		super(service, route, 'turma');
		this.ofertaDisciplinaService = ofertaDisciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.listOfertaDisciplina = [];
		this.listOldSelectedOfertaDisciplina = [];
		this.listNotSelectedOfertaDisciplina = [];
		this.listSelectedOfertaDisciplina = [];

		this.ofertaCursoService.findAll().subscribe(data => {
			this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllOfertaDisciplinaById(this.id).subscribe(data => {
			console.log(data);
			this.listOldSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
			this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);

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
			this.setErrorMessage(error);
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
			this.setErrorMessage(error);
		});
	}

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

	compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
		return o1.compare(o2);
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}