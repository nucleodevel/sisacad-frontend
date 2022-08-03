import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

@Component({
	selector: 'app-discente-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteListComponent extends AbstractListComponent<Discente, DiscenteDto, DiscenteService> {

	constructor(protected service: DiscenteService,
		protected router: Router) {
		super(service, router, 'discente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}