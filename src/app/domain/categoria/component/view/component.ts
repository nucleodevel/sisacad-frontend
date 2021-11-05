import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';
import { CategoriaService } from '../../service/service';
import { Categoria } from '../../entity/entity';

@Component({
  selector: 'app-categoria-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaViewComponent extends AbstractViewComponent<Categoria, CategoriaService> implements OnInit {

  constructor(protected entityService: CategoriaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}