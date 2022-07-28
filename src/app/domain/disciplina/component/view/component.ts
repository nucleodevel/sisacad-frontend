import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Disciplina } from '../../entity/entity';
import { DisciplinaDto } from '../../dto/dto';
import { DisciplinaService } from '../../service/service';

import { EstruturaCurricular } from '../../../estrutura-curricular/entity/entity';
import { EstruturaCurricularService } from '../../../estrutura-curricular/service/service';

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