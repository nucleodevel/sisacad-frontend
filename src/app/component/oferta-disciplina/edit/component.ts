import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaDto } from '../../../dto/oferta-disciplina/dto';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteService } from '../../../service/discente/service';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaService } from '../../../service/disciplina/service';

import { Docente } from '../../../domain/docente/entity';
import { DocenteService } from '../../../service/docente/service';

import { Turma } from '../../../domain/turma/entity';
import { TurmaService } from '../../../service/turma/service';

@Component({
	selector: 'app-oferta-disciplina-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaEditComponent extends AbstractEditComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> {

	listaDisciplina!: Disciplina[];
	listaDocente!: Docente[];
	listDiscente!: Discente[];
	listOldSelectedDiscente!: Discente[];
	listNotSelectedDiscente!: Discente[];
	listSelectedDiscente!: Discente[];

	constructor(protected service: OfertaDisciplinaService, protected turmaService: TurmaService, protected discenteService: DiscenteService,
		protected route: ActivatedRoute,
		protected disciplinaService: DisciplinaService, protected docenteService: DocenteService) {
		super(service, route, 'oferta-disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.listDiscente = [];
		this.listOldSelectedDiscente = [];
		this.listNotSelectedDiscente = [];
		this.listSelectedDiscente = [];

		this.disciplinaService.findAll().subscribe(data => {
			this.listaDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.docenteService.findAll().subscribe(data => {
			this.listaDocente = this.docenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.discenteService.findAll().subscribe(data => {
			this.listDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllDiscenteById(this.id).subscribe(data => {
			console.log(data);
			this.listOldSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
			this.listSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);

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
	}

	onSubmit() {

		var listDeleteDiscente: Discente[] = [];
		var listInsertDiscente: Discente[] = [];

		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);

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
			this.service.deleteDiscente(this.id, item.id).subscribe();
		});

		listInsertDiscente.forEach(item => {
			this.service.insertDiscente(this.id, item.id).subscribe();
		});

		this.service.update(this.id, dto).subscribe(data => {
			this.list();
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

	compareDisciplina(o1: Disciplina, o2: Disciplina) {
		return o1.compare(o2);
	}

	compareDocente(o1: Docente, o2: Docente) {
		return o1.compare(o2);
	}

	compareTurma(o1: Turma, o2: Turma) {
		return o1.compare(o2);
	}

	compareDiscente(o1: Discente, o2: Discente) {
		return o1.compare(o2);
	}

}