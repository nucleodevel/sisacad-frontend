import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Pessoa } from '../../entity/entity';
import { PessoaDto } from '../../dto/dto';
import { PessoaService } from '../../service/service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PessoaEditComponent extends AbstractEditComponent<Pessoa, PessoaDto, PessoaService> implements OnInit {

  constructor(protected service: PessoaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'pessoas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}