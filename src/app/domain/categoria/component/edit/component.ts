import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';
import { CategoriaService } from '../../service/service';
import { Categoria } from '../../entity/entity';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaEditComponent extends AbstractEditComponent<Categoria, CategoriaService> implements OnInit {

  constructor(protected entityService: CategoriaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}