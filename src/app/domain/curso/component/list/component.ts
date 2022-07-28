import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Curso } from '../../entity/entity';
import { CursoDto } from '../../dto/dto';
import { CursoService } from '../../service/service';

@Component({
	selector: 'app-curso-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoListComponent extends AbstractListComponent<Curso, CursoDto, CursoService> {

	constructor(protected service: CursoService,
		protected router: Router) {
		super(service, router, 'curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}