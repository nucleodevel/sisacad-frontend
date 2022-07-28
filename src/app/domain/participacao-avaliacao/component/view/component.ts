import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { ParticipacaoAvaliacao } from '../../entity/entity';
import { ParticipacaoAvaliacaoDto } from '../../dto/dto';
import { ParticipacaoAvaliacaoService } from '../../service/service';

@Component({
	selector: 'app-participacao-avaliacao-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAvaliacaoViewComponent extends AbstractViewComponent<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto, ParticipacaoAvaliacaoService> {

	constructor(protected service: ParticipacaoAvaliacaoService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'participacao-avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}