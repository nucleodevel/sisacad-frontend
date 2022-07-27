import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { AvaliacaoVestibulando } from '../../entity/entity';
import { AvaliacaoVestibulandoDto } from '../../dto/dto';
import { AvaliacaoVestibulandoService } from '../../service/service';

import { Vestibulando } from '../../../vestibulando/entity/entity';
import { VestibulandoService } from '../../../vestibulando/service/service';

@Component({
	selector: 'app-avaliacao-vestibulando-add',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoAddComponent extends AbstractAddComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> implements OnInit {

	listaVestibulando!: Vestibulando[];

	constructor(protected service: AvaliacaoVestibulandoService, protected router: Router,
		protected route: ActivatedRoute, protected vestibulandoService: VestibulandoService) {
		super(service, router, route, 'avaliacao-vestibulando');
	}

	ngOnInit() {
		super.ngOnInitSuper();

		this.vestibulandoService.findAll().subscribe(data => {
			this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setErrorMessage(error.error.msg);
		});
	}

	compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
		return o1.compare(o2);
	}

}