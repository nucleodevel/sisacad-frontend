import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Categoria } from '../../entity/entity';
import { CategoriaDto } from '../../dto/dto';
import { CategoriaService } from '../../service/service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaListComponent extends AbstractListComponent<Categoria, CategoriaDto, CategoriaService> implements OnInit {

  constructor(protected service: CategoriaService,
    protected router: Router) {
	super(service, router, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}