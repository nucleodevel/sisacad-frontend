import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaDto } from '../../../dto/disciplina/dto';
import { DisciplinaService } from '../../../service/disciplina/service';

@Component({
	selector: 'app-disciplina-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DisciplinaAddComponent extends AbstractAddComponent<Disciplina, DisciplinaDto, DisciplinaService> {

	constructor(protected service: DisciplinaService,
		protected route: ActivatedRoute) {
		super(service, route, 'disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}