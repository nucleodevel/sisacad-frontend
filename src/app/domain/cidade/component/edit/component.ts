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

  onSubmit() {
	this.estadoService.findById(this.entity.estado.id).subscribe(data => {
	  this.entity.estado = this.estadoService.makeEntityFromDto(data);
    });
	
	super.onSubmit();
  }

  onSelect(event: Event) {
    alert(event);
  }

  estadoChanged(estado: Estado) {
	this.entity.estado = estado;
    //alert(this.entity.estado.nome); // here you will able to see whole object in console
  }

}