import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
export class EstruturaCurricularViewComponent 
	extends AbstractViewComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listSelectedDisciplina!: Disciplina[];

	/*
	 * Constructors
	 */

	constructor(protected service: EstruturaCurricularService, protected route: ActivatedRoute,
		protected disciplinaService: DisciplinaService) {

		super(service, route, 'estrutura-curricular');
	}

	/*
	 * Component methods
	 */

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
			this.setResultMessage("FAILURE", error);
		});

	}

}