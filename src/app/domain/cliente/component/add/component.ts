import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Cliente } from '../../entity/entity';
import { ClienteDto } from '../../dto/dto';
import { ClienteService } from '../../service/service';

import { Pessoa } from '../../../pessoa/entity/entity';
import { PessoaService } from '../../../pessoa/service/service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ClienteAddComponent extends AbstractAddComponent<Cliente, ClienteDto, ClienteService> implements OnInit {
	
  pessoas!: Pessoa[];

  constructor(protected service: ClienteService, protected router: Router, 
      protected route: ActivatedRoute, protected pessoaService: PessoaService) {
	super(service, router, route, 'clientes');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.pessoaService.findAll().subscribe(data => {
	  this.pessoas = this.pessoaService.makeEntityArrayFromDtoArray(data);
    });
  }

  comparePessoa(o1: Pessoa, o2: Pessoa) {
	return o1.compare(o2);
  }

}