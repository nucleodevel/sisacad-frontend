import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Aula } from '../../../domain/aula/entity';
import { AulaDto } from '../../../dto/aula/dto';
import { AulaService } from '../../../service/aula/service';

import { ParticipacaoAula } from '../../../domain/participacao-aula/entity';
import { ParticipacaoAulaDto } from '../../../dto/participacao-aula/dto';
import { ParticipacaoAulaService } from '../../../service/participacao-aula/service';

@Component({
	selector: 'app-aula-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AulaViewComponent extends AbstractViewComponent<Aula, AulaDto, AulaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;
	
	listSelectedParticipacaoAula!: ParticipacaoAula[];

	constructor(protected service: AulaService, protected participacaoAulaService: ParticipacaoAulaService,
		protected route: ActivatedRoute) {
		super(service, route, 'aula');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllParticipacaoAulaById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedParticipacaoAula = this.participacaoAulaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	ngAfterViewInit() {
		this.hideloader(this.loader, this.bodyCard);
	}

}