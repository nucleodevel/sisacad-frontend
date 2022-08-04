import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractEditComponent } from '../../../component/abstract/edit/component';

import { Vestibular } from '../../../domain/vestibular/entity';
import { VestibularDto } from '../../../dto/vestibular/dto';
import { VestibularService } from '../../../service/vestibular/service';

@Component({
	selector: 'app-vestibular-edit',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibularEditComponent extends AbstractEditComponent<Vestibular, VestibularDto, VestibularService> {

	constructor(protected service: VestibularService,
		protected route: ActivatedRoute) {
		super(service, route, 'vestibular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}