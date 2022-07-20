import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Discente } from '../../entity/entity';
import { DiscenteDto } from '../../dto/dto';
import { DiscenteService } from '../../service/service';

import { Vestibulando } from '../../../vestibulando/entity/entity';
import { VestibulandoService } from '../../../vestibulando/service/service';

@Component({
  selector: 'app-discente-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DiscenteAddComponent extends AbstractAddComponent<Discente, DiscenteDto, DiscenteService> implements OnInit {
	
  listaVestibulando!: Vestibulando[];

  constructor(protected service: DiscenteService, protected router: Router, 
      protected route: ActivatedRoute, protected vestibulandoService: VestibulandoService) {
	super(service, router, route, 'discente');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.vestibulandoService.findAll().subscribe(data => {
	  this.listaVestibulando = this.vestibulandoService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareVestibulando(o1: Vestibulando, o2: Vestibulando) {
	return o1.compare(o2);
  }

}