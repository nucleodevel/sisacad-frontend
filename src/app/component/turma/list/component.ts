import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Turma } from '../../../domain/turma/entity';
import { TurmaDto } from '../../../dto/turma/dto';
import { TurmaService } from '../../../service/turma/service';

@Component({
	selector: 'app-turma-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class TurmaListComponent extends AbstractListComponent<Turma, TurmaDto, TurmaService> {

	constructor(protected service: TurmaService,
		protected router: Router) {
		super(service, router, 'turma');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}