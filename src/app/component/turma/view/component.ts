import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Turma } from '../../../domain/turma/entity';
import { TurmaDto } from '../../../dto/turma/dto';
import { TurmaService } from '../../../service/turma/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

@Component({
	selector: 'app-turma-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaViewComponent extends AbstractViewComponent<Turma, TurmaDto, TurmaService> {

	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: TurmaService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected route: ActivatedRoute) {
		super(service, route, 'turma');
		this.ofertaDisciplinaService = ofertaDisciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllOfertaDisciplinaById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

}