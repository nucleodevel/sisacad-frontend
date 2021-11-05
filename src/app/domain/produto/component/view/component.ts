import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';
import { ProdutoService } from '../../service/service';
import { Produto } from '../../entity/entity';

@Component({
  selector: 'app-produto-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoViewComponent extends AbstractViewComponent<Produto, ProdutoService> implements OnInit {

  constructor(protected entityService: ProdutoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}