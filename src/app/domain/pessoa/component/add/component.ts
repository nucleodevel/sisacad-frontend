import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Pessoa } from '../../entity/entity';
import { PessoaDto } from '../../dto/dto';
import { PessoaService } from '../../service/service';

@Component({
  selector: 'app-pessoa-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PessoaAddComponent extends AbstractAddComponent<Pessoa, PessoaDto, PessoaService> implements OnInit {

  constructor(protected service: PessoaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'pessoas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}