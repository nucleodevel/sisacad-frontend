import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
			this.setErrorMessage(error);
		});

		this.docenteService.findAll().subscribe(data => {
			this.listaDocente = this.docenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.turmaService.findAll().subscribe(data => {
			this.listTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllTurmaById(this.id).subscribe(data => {
			console.log(data);
			this.listOldSelectedTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
			this.listSelectedTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
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
		}, error => {
			this.setErrorMessage(error);
		});
	}

	onSubmit() {
		var listDeleteTurma: Turma[] = [];
		var listInsertTurma: Turma[] = [];

		var listDeleteDiscente: Discente[] = [];
		var listInsertDiscente: Discente[] = [];

		var dto = this.service.newDtoInstance();

		dto.copyFromEntity(this.entity);

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

		this.service.update(this.id, dto).subscribe(data => {
			this.list();
		}, error => {
			this.setErrorMessage(error);
		});
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