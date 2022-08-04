import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { ParticipacaoAula } from '../../../domain/participacao-aula/entity';
import { ParticipacaoAulaDto } from '../../../dto/participacao-aula/dto';
import { ParticipacaoAulaService } from '../../../service/participacao-aula/service';

@Component({
	selector: 'app-participacao-aula-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAulaListComponent extends AbstractListComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> {

	constructor(protected service: ParticipacaoAulaService,
		) {
		super(service, 'participacao-aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}