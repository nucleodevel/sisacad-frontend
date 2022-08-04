import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { ParticipacaoAvaliacao } from '../../../domain/participacao-avaliacao/entity';
import { ParticipacaoAvaliacaoDto } from '../../../dto/participacao-avaliacao/dto';
import { ParticipacaoAvaliacaoService } from '../../../service/participacao-avaliacao/service';

@Component({
	selector: 'app-participacao-avaliacao-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAvaliacaoListComponent extends AbstractListComponent<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto, ParticipacaoAvaliacaoService> {

	constructor(protected service: ParticipacaoAvaliacaoService,
		) {
		super(service, 'participacao-avaliacao');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}