import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Vestibulando } from '../../entity/entity';
import { VestibulandoDto } from '../../dto/dto';
import { VestibulandoService } from '../../service/service';

import { OfertaCurso } from '../../../oferta-curso/entity/entity';
import { OfertaCursoService } from '../../../oferta-curso/service/service';

@Component({
  selector: 'app-vestibulando-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class VestibulandoAddComponent extends AbstractAddComponent<Vestibulando, VestibulandoDto, VestibulandoService> implements OnInit {
	
  listaOfertaCurso!: OfertaCurso[];

  constructor(protected service: VestibulandoService, protected router: Router, 
      protected route: ActivatedRoute, protected ofertaCursoService: OfertaCursoService) {
	super(service, router, route, 'vestibulando');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.ofertaCursoService.findAll().subscribe(data => {
	  this.listaOfertaCurso = this.ofertaCursoService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareOfertaCurso(o1: OfertaCurso, o2: OfertaCurso) {
	return o1.compare(o2);
  }

}