import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { OfertaDisciplina } from '../../entity/entity';
import { OfertaDisciplinaDto } from '../../dto/dto';
import { OfertaDisciplinaService } from '../../service/service';

import { Disciplina } from '../../../disciplina/entity/entity';
import { DisciplinaService } from '../../../disciplina/service/service';

import { Docente } from '../../../docente/entity/entity';
import { DocenteService } from '../../../docente/service/service';

@Component({
	selector: 'app-oferta-disciplina-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaAddComponent extends AbstractAddComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> implements OnInit {

	listaDisciplina!: Disciplina[];
	listaDocente!: Docente[];

	constructor(protected service: OfertaDisciplinaService, protected router: Router,
		protected route: ActivatedRoute, protected disciplinaService: DisciplinaService, protected docenteService: DocenteService) {
		super(service, router, route, 'oferta-disciplina');
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
	}

	compareDisciplina(o1: Disciplina, o2: Disciplina) {
		return o1.compare(o2);
	}

	compareDocente(o1: Docente, o2: Docente) {
		return o1.compare(o2);
	}

}