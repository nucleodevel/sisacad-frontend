import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Docente } from '../../entity/entity';
import { DocenteDto } from '../../dto/dto';
import { DocenteService } from '../../service/service';

@Component({
	selector: 'app-docente-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteAddComponent extends AbstractAddComponent<Docente, DocenteDto, DocenteService> {

	constructor(protected service: DocenteService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'docente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}