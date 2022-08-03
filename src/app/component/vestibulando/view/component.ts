import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-vestibulando-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoViewComponent extends AbstractViewComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	constructor(protected service: VestibulandoService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}