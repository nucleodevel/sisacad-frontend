import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';
import { ProdutoService } from '../../service/service';
import { Produto } from '../../entity/entity';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoEditComponent extends AbstractEditComponent<Produto, ProdutoService> implements OnInit {

  constructor(protected entityService: ProdutoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}