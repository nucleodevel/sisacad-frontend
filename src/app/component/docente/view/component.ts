import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Docente } from '../../../domain/docente/entity';
import { DocenteDto } from '../../../dto/docente/dto';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-docente-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteViewComponent extends AbstractViewComponent<Docente, DocenteDto, DocenteService> {

	constructor(protected service: DocenteService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'docente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}