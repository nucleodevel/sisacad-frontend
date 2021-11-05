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
    
  estadoIdSelected!: number;

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

    this.estadoIdSelected = this.entity.estado.id;
  }

  onSubmit() {
	this.estadoService.findById(2).subscribe(data => {
	  this.entity.estado = this.estadoService.makeEntityFromDto(data);
    });
	
	var dto = this.service.newDtoInstance();
	dto.copyFromEntity(this.entity);
    this.service.update(this.id, dto).subscribe(result => this.list());
  }

  compararEstados(obj1: Estado, obj2: Estado) {
	return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

}