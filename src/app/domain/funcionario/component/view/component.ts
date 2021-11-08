import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Funcionario } from '../../entity/entity';
import { FuncionarioDto } from '../../dto/dto';
import { FuncionarioService } from '../../service/service';

import { FuncionarioFuncao } from '../../enum/funcionario-funcao';

@Component({
  selector: 'app-funcionario-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class FuncionarioViewComponent extends AbstractViewComponent<Funcionario, FuncionarioDto, FuncionarioService> implements OnInit {
	
  funcionarioFuncao = FuncionarioFuncao;

  constructor(protected service: FuncionarioService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'funcionarios');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }
}