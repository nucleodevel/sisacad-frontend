import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Docente } from '../../../domain/docente/entity';
import { DocenteDto } from '../../../dto/docente/dto';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-docente-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteEditComponent extends AbstractEditComponent<Docente, DocenteDto, DocenteService> {

	constructor(protected service: DocenteService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'docente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}