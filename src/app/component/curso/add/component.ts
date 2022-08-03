import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Curso } from '../../../domain/curso/entity';
import { CursoDto } from '../../../dto/curso/dto';
import { CursoService } from '../../../service/curso/service';

@Component({
	selector: 'app-curso-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoAddComponent extends AbstractAddComponent<Curso, CursoDto, CursoService> {

	constructor(protected service: CursoService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}