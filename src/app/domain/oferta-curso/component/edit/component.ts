import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { OfertaCurso } from '../../entity/entity';
import { OfertaCursoDto } from '../../dto/dto';
import { OfertaCursoService } from '../../service/service';

import { Vestibular } from '../../../vestibular/entity/entity';
import { VestibularService } from '../../../vestibular/service/service';

import { EstruturaCurricular } from '../../../estrutura-curricular/entity/entity';
import { EstruturaCurricularService } from '../../../estrutura-curricular/service/service';

@Component({
  selector: 'app-oferta-curso-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class OfertaCursoEditComponent extends AbstractEditComponent<OfertaCurso, OfertaCursoDto, OfertaCursoService> implements OnInit {
	
  listaVestibular!: Vestibular[];
  listaEstruturaCurricular!: EstruturaCurricular[];

  constructor(protected service: OfertaCursoService, protected router: Router, protected route: ActivatedRoute, 
      protected vestibularService: VestibularService, protected estruturaCurricularService: EstruturaCurricularService) {
	super(service, router, route, 'oferta-curso');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.vestibularService.findAll().subscribe(data => {
	  this.listaVestibular = this.vestibularService.makeEntityArrayFromDtoArray(data);
    });
	
	this.estruturaCurricularService.findAll().subscribe(data => {
	  this.listaEstruturaCurricular = this.estruturaCurricularService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareVestibular(o1: Vestibular, o2: Vestibular) {
	return o1.compare(o2);
  }

  compareEstruturaCurricular(o1: EstruturaCurricular, o2: EstruturaCurricular) {
	return o1.compare(o2);
  }

}