import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Discente } from '../../entity/entity';
import { DiscenteDto } from '../../dto/dto';
import { DiscenteService } from '../../service/service';

import { OfertaDisciplina } from '../../../oferta-disciplina/entity/entity';
import { OfertaDisciplinaService } from '../../../oferta-disciplina/service/service';

@Component({
	selector: 'app-discente-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteViewComponent extends AbstractViewComponent<Discente, DiscenteDto, DiscenteService> {

	listSelectedOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: DiscenteService, protected ofertaDisciplinaService: OfertaDisciplinaService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'discente');
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