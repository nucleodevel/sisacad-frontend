import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Avaliacao } from '../../../domain/avaliacao/entity';
import { AvaliacaoDto } from '../../../dto/avaliacao/dto';
import { AvaliacaoService } from '../../../service/avaliacao/service';

@Component({
	selector: 'app-avaliacao-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoListComponent extends AbstractListComponent<Avaliacao, AvaliacaoDto, AvaliacaoService> {

	constructor(protected service: AvaliacaoService) {
		super(service, 'avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}