import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../component/abstract/view/component';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaDto } from '../../../dto/disciplina/dto';
import { DisciplinaService } from '../../../service/disciplina/service';

import { EstruturaCurricular } from '../../../domain/estrutura-curricular/entity';
import { EstruturaCurricularService } from '../../../service/estrutura-curricular/service';

@Component({
	selector: 'app-disciplina-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DisciplinaViewComponent extends AbstractViewComponent<Disciplina, DisciplinaDto, DisciplinaService> {

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	listSelectedEstruturaCurricular!: EstruturaCurricular[];

	constructor(protected service: DisciplinaService, protected route: ActivatedRoute,
		protected estruturaCurricularService: EstruturaCurricularService) {

		super(service, route, 'disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional(dto: DisciplinaDto) {

		this.service.findAllEstruturaCurricularById(dto.id).subscribe(data => {
			console.log(data);
			this.listSelectedEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});

	}

}