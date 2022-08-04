import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularDto } from '../../../dto/estrutura-curricular/dto';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

import { Curso } from '../../../domain/curso/entity';
import { CursoService } from '../../../service/curso/service';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaService } from '../../../service/disciplina/service';

@Component({
	selector: 'app-estrutura-curricular-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class EstruturaCurricularEditComponent extends AbstractEditComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	listaCurso!: Curso[];
	listDisciplina!: Disciplina[];
	listOldSelectedDisciplina!: Disciplina[];
	listNotSelectedDisciplina!: Disciplina[];
	listSelectedDisciplina!: Disciplina[];

	constructor(protected service: EstruturaCurricularService, protected disciplinaService: DisciplinaService,
		protected route: ActivatedRoute, protected cursoService: CursoService) {
		super(service, route, 'estrutura-curricular');
		this.disciplinaService = disciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.listDisciplina = [];
		this.listOldSelectedDisciplina = [];
		this.listNotSelectedDisciplina = [];
		this.listSelectedDisciplina = [];

		this.cursoService.findAll().subscribe(data => {
			this.listaCurso = this.cursoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.disciplinaService.findAll().subscribe(data => {
			this.listDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllDisciplinaById(this.id).subscribe(data => {
			console.log(data);
			this.listOldSelectedDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
			this.listSelectedDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);

			this.listDisciplina.forEach(item => {
				var exists = false;
				this.listSelectedDisciplina.forEach(slctItem => {
					if (item.id == slctItem.id) {
						exists = true;
					}
				});

				if (!exists) {
					this.listNotSelectedDisciplina.push(item);
				}
			});
		}, error => {
			this.setErrorMessage(error);
		});
	}

	onSubmit() {
		var listDeleteDisciplina: Disciplina[] = [];
		var listInsertDisciplina: Disciplina[] = [];
		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);

		this.listOldSelectedDisciplina.forEach(oldItem => {
			var exists = false;
			this.listSelectedDisciplina.forEach(item => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listDeleteDisciplina.push(oldItem);
			}
		});

		this.listSelectedDisciplina.forEach(item => {
			var exists = false;
			this.listOldSelectedDisciplina.forEach(oldItem => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listInsertDisciplina.push(item);
			}
		});

		listDeleteDisciplina.forEach(item => {
			this.service.deleteDisciplina(this.id, item.id).subscribe();
		});

		listInsertDisciplina.forEach(item => {
			this.service.insertDisciplina(this.id, item.id).subscribe();
		});

		this.service.update(this.id, dto).subscribe(data => {
			this.list();
		}, error => {
			this.setErrorMessage(error);
		});
	}

	setDisciplinaAsSelected(index: number) {
		var item = this.listNotSelectedDisciplina[index];
		this.listSelectedDisciplina.push(item);
		this.listNotSelectedDisciplina.splice(index, 1);
	}

	setDisciplinaAsNotSelected(index: number) {
		var item = this.listSelectedDisciplina[index];
		this.listNotSelectedDisciplina.push(item);
		this.listSelectedDisciplina.splice(index, 1);
	}

	compareCurso(o1: Curso, o2: Curso) {
		return o1.compare(o2);
	}

	compareDisciplina(o1: Disciplina, o2: Disciplina) {
		return o1.compare(o2);
	}

}