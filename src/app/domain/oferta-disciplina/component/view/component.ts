import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { OfertaDisciplina } from '../../entity/entity';
import { OfertaDisciplinaDto } from '../../dto/dto';
import { OfertaDisciplinaService } from '../../service/service';

import { Turma } from '../../../turma/entity/entity';
import { TurmaService } from '../../../turma/service/service';

import { Discente } from '../../../discente/entity/entity';
import { DiscenteService } from '../../../discente/service/service';

@Component({
	selector: 'app-oferta-disciplina-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaDisciplinaViewComponent extends AbstractViewComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> implements OnInit {

	listSelectedTurma!: Turma[];
	listSelectedDiscente!: Discente[];
	
	constructor(protected service: OfertaDisciplinaService, protected turmaService: TurmaService, protected discenteService: DiscenteService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'oferta-disciplina');
		this.turmaService = turmaService;
		this.discenteService = discenteService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllTurmaById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedTurma = this.turmaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});

		this.service.findAllDiscenteById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

}