import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Avaliacao } from '../../../domain/avaliacao/entity';
import { AvaliacaoDto } from '../../../dto/avaliacao/dto';
import { AvaliacaoService } from '../../../service/avaliacao/service';

@Component({
	selector: 'app-avaliacao-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoViewComponent extends AbstractViewComponent<Avaliacao, AvaliacaoDto, AvaliacaoService> {

	constructor(protected service: AvaliacaoService, protected route: ActivatedRoute) {
		super(service, route, 'avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}