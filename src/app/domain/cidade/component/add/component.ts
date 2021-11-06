import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Cidade } from '../../entity/entity';
import { CidadeDto } from '../../dto/dto';
import { CidadeService } from '../../service/service';

import { Estado } from '../../../estado/entity/entity';
import { EstadoService } from '../../../estado/service/service';

@Component({
  selector: 'app-cidade-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CidadeAddComponent extends AbstractAddComponent<Cidade, CidadeDto, CidadeService> implements OnInit {
	
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

    this.entity.estado = new Estado();
  }

  onSubmit() {
	this.estadoService.findById(this.entity.estado.id).subscribe(data => {
	  this.entity.estado = this.estadoService.makeEntityFromDto(data);
    });
	
	super.onSubmit();
  }

  estadoChanged(estado: Estado) {
	this.entity.estado = estado;
  }

}