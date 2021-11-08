import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Funcionario } from '../../entity/entity';
import { FuncionarioDto } from '../../dto/dto';
import { FuncionarioService } from '../../service/service';

import { FuncionarioFuncao } from '../../enum/funcionario-funcao';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class FuncionarioListComponent extends AbstractListComponent<Funcionario, FuncionarioDto, FuncionarioService> implements OnInit {

  funcionarioFuncao = FuncionarioFuncao;

  constructor(protected service: FuncionarioService,
    protected router: Router) {
	super(service, router, 'funcionarios');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}