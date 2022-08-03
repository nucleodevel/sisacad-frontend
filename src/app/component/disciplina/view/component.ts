import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

	listSelectedEstruturaCurricular!: EstruturaCurricular[];

	constructor(protected service: DisciplinaService, protected estruturaCurricularService: EstruturaCurricularService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'disciplina');
		this.estruturaCurricularService = estruturaCurricularService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllEstruturaCurricularById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

}