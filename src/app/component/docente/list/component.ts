import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Docente } from '../../../domain/docente/entity';
import { DocenteDto } from '../../../dto/docente/dto';
import { DocenteService } from '../../../service/docente/service';

@Component({
	selector: 'app-docente-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DocenteListComponent extends AbstractListComponent<Docente, DocenteDto, DocenteService> {

	constructor(protected service: DocenteService,
		) {
		super(service, 'docente');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}