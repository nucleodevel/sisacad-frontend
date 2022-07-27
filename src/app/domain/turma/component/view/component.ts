import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Turma } from '../../entity/entity';
import { TurmaDto } from '../../dto/dto';
import { TurmaService } from '../../service/service';

import { OfertaDisciplina } from '../../../oferta-disciplina/entity/entity';
import { OfertaDisciplinaService } from '../../../oferta-disciplina/service/service';

@Component({
	selector: 'app-turma-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaViewComponent extends AbstractViewComponent<Turma, TurmaDto, TurmaService> implements OnInit {

	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: TurmaService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'turma');
		this.ofertaDisciplinaService = ofertaDisciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllOfertaDisciplinaById(this.id).subscribe(data => {
			console.log(data)
			this.listSelectedOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

}