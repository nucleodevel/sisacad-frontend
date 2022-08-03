import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Vestibular } from '../../../domain/vestibular/entity';
import { VestibularDto } from '../../../dto/vestibular/dto';
import { VestibularService } from '../../../service/vestibular/service';

@Component({
	selector: 'app-vestibular-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibularAddComponent extends AbstractAddComponent<Vestibular, VestibularDto, VestibularService> {

	constructor(protected service: VestibularService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'vestibular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}