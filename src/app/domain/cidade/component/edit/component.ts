import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Cidade } from '../../entity/entity';
import { CidadeDto } from '../../dto/dto';
import { CidadeService } from '../../service/service';

import { Estado } from '../../../estado/entity/entity';
import { EstadoService } from '../../../estado/service/service';

@Component({
  selector: 'app-cidade-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CidadeEditComponent extends AbstractEditComponent<Cidade, CidadeDto, CidadeService> implements OnInit {
	
  estados!: Estado[];

  constructor(protected service: CidadeService, protected router: Router, 
      protected route: ActivatedRoute, protected estadoService: EstadoService) {
	super(service, router, route, 'cidades');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.estadoService.findAll().subscribe(data => {
	  this.estados = this.estadoService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareEstado(o1: Estado, o2: Estado) {
	return o1 && o2 ? o1.id === o2.id: o1 == o2;
  }

}