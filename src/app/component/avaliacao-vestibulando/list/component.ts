import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { AvaliacaoVestibulando } from '../../../domain/avaliacao-vestibulando/entity';
import { AvaliacaoVestibulandoDto } from '../../../dto/avaliacao-vestibulando/dto';
import { AvaliacaoVestibulandoService } from '../../../service/avaliacao-vestibulando/service';

@Component({
	selector: 'app-avaliacao-vestibulando-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoListComponent extends AbstractListComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> {

	constructor(protected service: AvaliacaoVestibulandoService,
		) {
		super(service, 'avaliacao-vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}