import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Curso } from '../../../domain/curso/entity';
import { CursoDto } from '../../../dto/curso/dto';
import { CursoService } from '../../../service/curso/service';

@Component({
	selector: 'app-curso-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoEditComponent extends AbstractEditComponent<Curso, CursoDto, CursoService> {

	constructor(protected service: CursoService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}