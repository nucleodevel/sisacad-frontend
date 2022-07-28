import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { OfertaCurso } from '../../entity/entity';
import { OfertaCursoDto } from '../../dto/dto';
import { OfertaCursoService } from '../../service/service';

@Component({
	selector: 'app-oferta-curso-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class OfertaCursoListComponent extends AbstractListComponent<OfertaCurso, OfertaCursoDto, OfertaCursoService> {

	constructor(protected service: OfertaCursoService,
		protected router: Router) {
		super(service, router, 'oferta-curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}