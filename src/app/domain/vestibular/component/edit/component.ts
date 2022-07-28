import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Vestibular } from '../../entity/entity';
import { VestibularDto } from '../../dto/dto';
import { VestibularService } from '../../service/service';

@Component({
	selector: 'app-vestibular-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibularEditComponent extends AbstractEditComponent<Vestibular, VestibularDto, VestibularService> {

	constructor(protected service: VestibularService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'vestibular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}