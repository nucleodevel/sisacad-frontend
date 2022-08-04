import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Docente } from '../../../domain/docente/entity';
import { DocenteDto } from '../../../dto/docente/dto';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-docente-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteAddComponent extends AbstractAddComponent<Docente, DocenteDto, DocenteService> {

	constructor(protected service: DocenteService,
		protected route: ActivatedRoute) {
		super(service, route, 'docente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}