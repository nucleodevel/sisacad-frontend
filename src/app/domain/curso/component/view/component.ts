import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Curso } from '../../entity/entity';
import { CursoDto } from '../../dto/dto';
import { CursoService } from '../../service/service';

@Component({
	selector: 'app-curso-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoViewComponent extends AbstractViewComponent<Curso, CursoDto, CursoService> {

	constructor(protected service: CursoService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}