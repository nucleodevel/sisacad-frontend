import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { EstruturaCurricular } from '../../entity/entity';
import { EstruturaCurricularDto } from '../../dto/dto';
import { EstruturaCurricularService } from '../../service/service';

import { Disciplina } from '../../../disciplina/entity/entity';
import { DisciplinaService } from '../../../disciplina/service/service';

@Component({
	selector: 'app-estrutura-curricular-view',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class EstruturaCurricularViewComponent extends AbstractViewComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> implements OnInit {

	listSelectedDisciplina!: Disciplina[];

	constructor(protected service: EstruturaCurricularService, protected disciplinaService: DisciplinaService,
		protected router: Router, protected route: ActivatedRoute) {
		super(service, router, route, 'estrutura-curricular');
		this.disciplinaService = disciplinaService;
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.service.findAllDisciplinaById(this.id).subscribe(data => {
			console.log(data);
			this.listSelectedDisciplina = this.disciplinaService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

}