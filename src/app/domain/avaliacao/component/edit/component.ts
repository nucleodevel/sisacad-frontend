import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Avaliacao } from '../../entity/entity';
import { AvaliacaoDto } from '../../dto/dto';
import { AvaliacaoService } from '../../service/service';

import { OfertaDisciplina } from '../../../oferta-disciplina/entity/entity';
import { OfertaDisciplinaService } from '../../../oferta-disciplina/service/service';

@Component({
	selector: 'app-avaliacao-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoEditComponent extends AbstractEditComponent<Avaliacao, AvaliacaoDto, AvaliacaoService> {

	listaOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: AvaliacaoService, protected router: Router,
		protected route: ActivatedRoute, protected ofertaDisciplinaService: OfertaDisciplinaService) {
		super(service, router, route, 'avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listaOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}