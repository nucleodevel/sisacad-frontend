import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Aula } from '../../entity/entity';
import { AulaDto } from '../../dto/dto';
import { AulaService } from '../../service/service';

import { OfertaDisciplina } from '../../../oferta-disciplina/entity/entity';
import { OfertaDisciplinaService } from '../../../oferta-disciplina/service/service';

@Component({
	selector: 'app-aula-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaEditComponent extends AbstractEditComponent<Aula, AulaDto, AulaService> implements OnInit {

	listaOfertaDisciplina!: OfertaDisciplina[];

	constructor(protected service: AulaService, protected router: Router,
		protected route: ActivatedRoute, protected ofertaDisciplinaService: OfertaDisciplinaService) {
		super(service, router, route, 'aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.ofertaDisciplinaService.findAll().subscribe(data => {
			this.listaOfertaDisciplina = this.ofertaDisciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}