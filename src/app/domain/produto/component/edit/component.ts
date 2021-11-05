import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Produto } from '../../entity/entity';
import { ProdutoDto } from '../../dto/dto';
import { ProdutoService } from '../../service/service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoEditComponent extends AbstractEditComponent<Produto, ProdutoDto, ProdutoService> implements OnInit {

  constructor(protected service: ProdutoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}