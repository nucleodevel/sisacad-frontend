import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';
import { CategoriaService } from '../../service/service';
import { Categoria } from '../../entity/entity';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaListComponent extends AbstractListComponent<Categoria, CategoriaService> implements OnInit {

  constructor(protected entityService: CategoriaService,
    protected router: Router) {
	super(entityService, router, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

  getEntityString(entity: Categoria): string {
	return entity.nome;
  }

}