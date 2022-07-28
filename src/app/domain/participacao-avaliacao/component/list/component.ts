import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { ParticipacaoAvaliacao } from '../../entity/entity';
import { ParticipacaoAvaliacaoDto } from '../../dto/dto';
import { ParticipacaoAvaliacaoService } from '../../service/service';

@Component({
	selector: 'app-participacao-avaliacao-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAvaliacaoListComponent extends AbstractListComponent<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto, ParticipacaoAvaliacaoService> {

	constructor(protected service: ParticipacaoAvaliacaoService,
		protected router: Router) {
		super(service, router, 'participacao-avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}