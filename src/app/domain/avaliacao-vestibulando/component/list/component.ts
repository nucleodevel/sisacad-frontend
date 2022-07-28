import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { AvaliacaoVestibulando } from '../../entity/entity';
import { AvaliacaoVestibulandoDto } from '../../dto/dto';
import { AvaliacaoVestibulandoService } from '../../service/service';

@Component({
	selector: 'app-avaliacao-vestibulando-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoListComponent extends AbstractListComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> {

	constructor(protected service: AvaliacaoVestibulandoService,
		protected router: Router) {
		super(service, router, 'avaliacao-vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}