import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Endereco } from '../../entity/entity';
import { EnderecoDto } from '../../dto/dto';
import { EnderecoService } from '../../service/service';

import { Cidade } from '../../../cidade/entity/entity';
import { CidadeService } from '../../../cidade/service/service';

import { Pessoa } from '../../../pessoa/entity/entity';
import { PessoaService } from '../../../pessoa/service/service';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EnderecoAddComponent extends AbstractAddComponent<Endereco, EnderecoDto, EnderecoService> implements OnInit {
	
  cidades!: Cidade[];
  pessoas!: Pessoa[];

  constructor(protected service: EnderecoService, protected router: Router, protected route: ActivatedRoute, 
      protected cidadeService: CidadeService, protected pessoaService: PessoaService) {
	super(service, router, route, 'enderecos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.cidadeService.findAll().subscribe(data => {
	  this.cidades = this.cidadeService.makeEntityArrayFromDtoArray(data);
    });
	
	this.pessoaService.findAll().subscribe(data => {
	  this.pessoas = this.pessoaService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareCidade(o1: Cidade, o2: Cidade) {
	return o1.compare(o2);
  }

  comparePessoa(o1: Pessoa, o2: Pessoa) {
	return o1.compare(o2);
  }

}