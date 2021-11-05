import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';
import { ProdutoService } from '../../service/service';
import { Produto } from '../../entity/entity';

@Component({
  selector: 'app-produto-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoListComponent extends AbstractListComponent<Produto, ProdutoService> implements OnInit {

  constructor(protected entityService: ProdutoService,
    protected router: Router) {
	super(entityService, router, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

  getEntityString(entity: Produto): string {
	return entity.nome;
  }

}