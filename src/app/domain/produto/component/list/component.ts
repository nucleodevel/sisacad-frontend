import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Produto } from '../../entity/entity';
import { ProdutoDto } from '../../dto/dto';
import { ProdutoService } from '../../service/service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoListComponent extends AbstractListComponent<Produto, ProdutoDto, ProdutoService> implements OnInit {

  constructor(protected service: ProdutoService,
    protected router: Router) {
	super(service, router, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}