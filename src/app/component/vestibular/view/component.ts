import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Vestibular } from '../../../domain/vestibular/entity';
import { VestibularDto } from '../../../dto/vestibular/dto';
import { VestibularService } from '../../../service/vestibular/service';

@Component({
	selector: 'app-vestibular-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibularViewComponent extends AbstractViewComponent<Vestibular, VestibularDto, VestibularService> {

	constructor(protected service: VestibularService,
		protected route: ActivatedRoute) {
		super(service, route, 'vestibular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}