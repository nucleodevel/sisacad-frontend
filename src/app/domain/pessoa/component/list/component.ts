import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Pessoa } from '../../entity/entity';
import { PessoaDto } from '../../dto/dto';
import { PessoaService } from '../../service/service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PessoaListComponent extends AbstractListComponent<Pessoa, PessoaDto, PessoaService> implements OnInit {

  constructor(protected service: PessoaService,
    protected router: Router) {
	super(service, router, 'pessoas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}