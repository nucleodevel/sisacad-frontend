import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { OfertaDisciplina } from '../../entity/entity';
import { OfertaDisciplinaDto } from '../../dto/dto';
import { OfertaDisciplinaService } from '../../service/service';

import { Disciplina } from '../../../disciplina/entity/entity';
import { DisciplinaService } from '../../../disciplina/service/service';

import { Docente } from '../../../docente/entity/entity';
import { DocenteService } from '../../../docente/service/service';

import { Turma } from '../../../turma/entity/entity';
import { TurmaService } from '../../../turma/service/service';

import { Discente } from '../../../discente/entity/entity';
import { DiscenteService } from '../../../discente/service/service';

@Component({
	selector: 'app-oferta-disciplina-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaEditComponent extends AbstractEditComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> implements OnInit {

	listaDisciplina!: Disciplina[];
	listaDocente!: Docente[];
	listTurma!: Turma[];
	listOldSelectedTurma!: Turma[];
	listSelectedTurma!: Turma[];
	listDiscente!: Discente[];
	listOldSelectedDiscente!: Discente[];
	listSelectedDiscente!: Discente[];

	constructor(protected service: OfertaDisciplinaService, protected turmaService: TurmaService, protected discenteService: DiscenteService,
		protected router: Router, protected route: ActivatedRoute,
		protected disciplinaService: DisciplinaService, protected docenteService: DocenteService) {
		super(service, router, route, 'oferta-disciplina');
		this.turmaService = turmaService;
		this.discenteService = discenteService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.disciplinaService.findAll().subscribe(data => {
			this.listaDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.docenteService.findAll().subscribe(data => {
			this.listaDocente = this.docenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.turmaService.findAll().subscribe(data => {
			this.listTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.service.findAllTurmaById(this.id).subscribe(data => {
			console.log(data)
			this.listOldSelectedTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
			this.listSelectedTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.discenteService.findAll().subscribe(data => {
			this.listDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.service.findAllDiscenteById(this.id).subscribe(data => {
			console.log(data)
			this.listOldSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
			this.listSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

	onSubmit() {
		var listDeleteTurma: Turma[] = [];
		var listInsertTurma: Turma[] = [];

		var listDeleteDiscente: Discente[] = [];
		var listInsertDiscente: Discente[] = [];

		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);
		this.service.update(this.id, dto).subscribe();

		this.listOldSelectedTurma.forEach(oldItem => {
			var exists = false;
			this.listSelectedTurma.forEach(item => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listDeleteTurma.push(oldItem);
			}
		});

		this.listSelectedTurma.forEach(item => {
			var exists = false;
			this.listOldSelectedTurma.forEach(oldItem => {
				if (oldItem.id == item.id) {
					exists = true;
				}
			});

			if (!exists) {
				listInsertTurma.push(item);
			}
		});

		listDeleteTurma.forEach(item => {
			this.service.deleteTurma(this.id, item.id).subscribe();
		});

		listInsertTurma.forEach(item => {
			this.service.insertTurma(this.id, item.id).subscribe();
		});

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

		this.list();
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