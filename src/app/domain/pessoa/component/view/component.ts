import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Pessoa } from '../../entity/entity';
import { PessoaDto } from '../../dto/dto';
import { PessoaService } from '../../service/service';

@Component({
  selector: 'app-pessoa-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PessoaViewComponent extends AbstractViewComponent<Pessoa, PessoaDto, PessoaService> implements OnInit {

  constructor(protected service: PessoaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'pessoas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}