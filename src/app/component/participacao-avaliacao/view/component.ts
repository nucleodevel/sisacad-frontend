import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { ParticipacaoAvaliacao } from '../../../domain/participacao-avaliacao/entity';
import { ParticipacaoAvaliacaoDto } from '../../../dto/participacao-avaliacao/dto';
import { ParticipacaoAvaliacaoService } from '../../../service/participacao-avaliacao/service';

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