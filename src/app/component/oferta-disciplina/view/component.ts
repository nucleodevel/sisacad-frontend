import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaDto } from '../../../dto/oferta-disciplina/dto';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteService } from '../../../service/discente/service';

import { Turma } from '../../../domain/turma/entity';
import { TurmaService } from '../../../service/turma/service';

@Component({
	selector: 'app-oferta-disciplina-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaViewComponent extends AbstractViewComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> {

	listSelectedTurma!: Turma[];
	listSelectedDiscente!: Discente[];

	constructor(protected service: OfertaDisciplinaService, protected turmaService: TurmaService, protected discenteService: DiscenteService,
		protected route: ActivatedRoute) {
		super(service, route, 'oferta-disciplina');
		this.turmaService = turmaService;
		this.discenteService = discenteService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllTurmaById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

		this.service.findAllDiscenteById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

}