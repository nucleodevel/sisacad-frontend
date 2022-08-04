import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-vestibulando-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoListComponent extends AbstractListComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	constructor(protected service: VestibulandoService,
		) {
		super(service, 'vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();
	}

}