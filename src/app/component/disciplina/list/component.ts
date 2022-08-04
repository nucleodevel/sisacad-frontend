import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Disciplina } from '../../../domain/disciplina/entity';
import { DisciplinaDto } from '../../../dto/disciplina/dto';
import { DisciplinaService } from '../../../service/disciplina/service';

@Component({
	selector: 'app-disciplina-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DisciplinaListComponent extends AbstractListComponent<Disciplina, DisciplinaDto, DisciplinaService> {

	constructor(protected service: DisciplinaService,
		) {
		super(service, 'disciplina');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}