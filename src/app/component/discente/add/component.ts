import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../component/abstract/add/component';

import { Discente } from '../../../domain/discente/entity';
import { DiscenteDto } from '../../../dto/discente/dto';
import { DiscenteService } from '../../../service/discente/service';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-discente-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class DiscenteAddComponent extends AbstractAddComponent<Discente, DiscenteDto, DiscenteService> {

	listaVestibulando!: Vestibulando[];

	constructor(protected service: DiscenteService, protected router: Router,
		protected route: ActivatedRoute, protected vestibulandoService: VestibulandoService) {
		super(service, router, route, 'discente');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.vestibulandoService.findAll().subscribe(data => {
			this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

}