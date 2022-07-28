import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Aula } from '../../entity/entity';
import { AulaDto } from '../../dto/dto';
import { AulaService } from '../../service/service';

@Component({
	selector: 'app-aula-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaListComponent extends AbstractListComponent<Aula, AulaDto, AulaService> {

	constructor(protected service: AulaService,
		protected router: Router) {
		super(service, router, 'aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}