import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Vestibular } from '../../entity/entity';
import { VestibularDto } from '../../dto/dto';
import { VestibularService } from '../../service/service';

@Component({
	selector: 'app-vestibular-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibularListComponent extends AbstractListComponent<Vestibular, VestibularDto, VestibularService> {

	constructor(protected service: VestibularService,
		protected router: Router) {
		super(service, router, 'vestibular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}