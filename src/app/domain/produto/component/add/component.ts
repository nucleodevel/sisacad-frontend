import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';
import { ProdutoService } from '../../service/service';
import { Produto } from '../../entity/entity';

@Component({
  selector: 'app-produto-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoAddComponent extends AbstractAddComponent<Produto, ProdutoService> implements OnInit {

  constructor(protected entityService: ProdutoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'produtos');
  }

  newEntityInstance(): Produto {
	return new Produto();
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}