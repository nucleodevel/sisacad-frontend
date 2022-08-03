import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

@Component({
	selector: 'app-aula-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaViewComponent extends AbstractViewComponent<Aula, AulaDto, AulaService> {

	constructor(protected service: AulaService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}