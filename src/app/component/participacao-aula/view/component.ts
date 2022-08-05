import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { ParticipacaoAula } from '../../../domain/participacao-aula/entity';
import { ParticipacaoAulaDto } from '../../../dto/participacao-aula/dto';
import { ParticipacaoAulaService } from '../../../service/participacao-aula/service';

@Component({
	selector: 'app-participacao-aula-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class ParticipacaoAulaViewComponent extends AbstractViewComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	constructor(protected service: ParticipacaoAulaService,
		protected route: ActivatedRoute) {
		super(service, route, 'participacao-aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}