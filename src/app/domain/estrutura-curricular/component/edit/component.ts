import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { EstruturaCurricular } from '../../entity/entity';
import { EstruturaCurricularDto } from '../../dto/dto';
import { EstruturaCurricularService } from '../../service/service';

import { Curso } from '../../../curso/entity/entity';
import { CursoService } from '../../../curso/service/service';

import { Disciplina } from '../../../disciplina/entity/entity';
import { DisciplinaService } from '../../../disciplina/service/service';

@Component({
	selector: 'app-estrutura-curricular-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class EstruturaCurricularEditComponent extends AbstractEditComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	listaCurso!: Curso[];
	listDisciplina!: Disciplina[];
	listOldSelectedDisciplina!: Disciplina[];
	listSelectedDisciplina!: Disciplina[];

	constructor(protected service: EstruturaCurricularService, protected disciplinaService: DisciplinaService,
		protected router: Router, protected route: ActivatedRoute, protected cursoService: CursoService) {
		super(service, router, route, 'estrutura-curricular');
		this.disciplinaService = disciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

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
		}, error => {
			this.setErrorMessage(error);
		});
	}

	onSubmit() {
		var listDeleteDisciplina: Disciplina[] = [];
		var listInsertDisciplina: Disciplina[] = [];
		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);
		this.service.update(this.id, dto).subscribe();

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

		this.list();
	}

	compareCurso(o1: Curso, o2: Curso) {
		return o1.compare(o2);
	}

	compareDisciplina(o1: Disciplina, o2: Disciplina) {
		return o1.compare(o2);
	}

}