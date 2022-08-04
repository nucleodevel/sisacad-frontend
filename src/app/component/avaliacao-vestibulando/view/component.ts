import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../../dto/avaliacao-vestibulando/dto';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

@Component({
	selector: 'app-avaliacao-vestibulando-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoViewComponent extends AbstractViewComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> {

	constructor(protected service: AvaliacaoVestibulandoService,
		protected route: ActivatedRoute) {
		super(service, route, 'avaliacao-vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}