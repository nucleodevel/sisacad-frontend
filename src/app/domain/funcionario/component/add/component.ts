import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Funcionario } from '../../entity/entity';
import { FuncionarioDto } from '../../dto/dto';
import { FuncionarioService } from '../../service/service';

import { FuncionarioFuncao } from '../../enum/funcionario-funcao';

import { Pessoa } from '../../../pessoa/entity/entity';
import { PessoaService } from '../../../pessoa/service/service';

@Component({
  selector: 'app-funcionario-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class FuncionarioAddComponent extends AbstractAddComponent<Funcionario, FuncionarioDto, FuncionarioService> implements OnInit {
	
  pessoas!: Pessoa[];
  funcionarioFuncao = FuncionarioFuncao;

  constructor(protected service: FuncionarioService, protected router: Router, 
      protected route: ActivatedRoute, protected pessoaService: PessoaService) {
	super(service, router, route, 'funcionarios');
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