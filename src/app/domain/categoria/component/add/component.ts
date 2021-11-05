import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Categoria } from '../../entity/entity';
import { CategoriaDto } from '../../dto/dto';
import { CategoriaService } from '../../service/service';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaAddComponent extends AbstractAddComponent<Categoria, CategoriaDto, CategoriaService> implements OnInit {

  constructor(protected service: CategoriaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}