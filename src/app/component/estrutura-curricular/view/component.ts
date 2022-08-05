import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularDto } from '../../../dto/estrutura-curricular/dto';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaService } from '../../../service/disciplina/service';

@Component({
	selector: 'app-estrutura-curricular-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class EstruturaCurricularViewComponent extends AbstractViewComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listSelectedDisciplina!: Disciplina[];

	constructor(protected service: EstruturaCurricularService, protected disciplinaService: DisciplinaService,
		protected route: ActivatedRoute) {
		super(service, route, 'estrutura-curricular');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional(dto: EstruturaCurricularDto) {

		this.service.findAllDisciplinaById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
		
	}

}