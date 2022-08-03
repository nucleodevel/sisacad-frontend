import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

import { OfertaDisciplina } from '../../../domain/oferta-disciplina/entity';
import { OfertaDisciplinaService } from '../../../service/oferta-disciplina/service';

@Component({
	selector: 'app-aula-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaEditComponent extends AbstractEditComponent<Aula, AulaDto, AulaService> {

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
			this.setErrorMessage(error);
		});
	}

	compareOfertaDisciplina(o1: OfertaDisciplina, o2: OfertaDisciplina) {
		return o1.compare(o2);
	}

}