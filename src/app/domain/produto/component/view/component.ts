import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Produto } from '../../entity/entity';
import { ProdutoDto } from '../../dto/dto';
import { ProdutoService } from '../../service/service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoViewComponent extends AbstractViewComponent<Produto, ProdutoDto, ProdutoService> implements OnInit {

  constructor(protected service: ProdutoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}