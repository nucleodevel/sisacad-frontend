import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Curso } from '../../../domain/curso/entity';
import { CursoDto } from '../../../dto/curso/dto';
import { CursoService } from '../../../service/curso/service';

@Component({
	selector: 'app-curso-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class CursoListComponent extends AbstractListComponent<Curso, CursoDto, CursoService> {

	constructor(protected service: CursoService,
		) {
		super(service, 'curso');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}