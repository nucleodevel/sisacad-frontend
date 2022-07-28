import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Avaliacao } from '../../entity/entity';
import { AvaliacaoDto } from '../../dto/dto';
import { AvaliacaoService } from '../../service/service';

@Component({
	selector: 'app-avaliacao-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoListComponent extends AbstractListComponent<Avaliacao, AvaliacaoDto, AvaliacaoService> {

	constructor(protected service: AvaliacaoService,
		protected router: Router) {
		super(service, router, 'avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}