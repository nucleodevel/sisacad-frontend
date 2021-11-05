import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Categoria } from '../../entity/entity';
import { CategoriaDto } from '../../dto/dto';
import { CategoriaService } from '../../service/service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaEditComponent extends AbstractEditComponent<Categoria, CategoriaDto, CategoriaService> implements OnInit {

  constructor(protected service: CategoriaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}