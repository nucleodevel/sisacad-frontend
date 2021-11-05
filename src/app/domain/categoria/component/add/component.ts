import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';
import { CategoriaService } from '../../service/service';
import { Categoria } from '../../entity/entity';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaAddComponent extends AbstractAddComponent<Categoria, CategoriaService> implements OnInit {

  constructor(protected entityService: CategoriaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'categorias');
  }

  newEntityInstance(): Categoria {
	return new Categoria();
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}