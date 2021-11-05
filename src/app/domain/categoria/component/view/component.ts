import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Categoria } from '../../entity/entity';
import { CategoriaDto } from '../../dto/dto';
import { CategoriaService } from '../../service/service';

@Component({
  selector: 'app-categoria-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CategoriaViewComponent extends AbstractViewComponent<Categoria, CategoriaDto, CategoriaService> implements OnInit {

  constructor(protected service: CategoriaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'categorias');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}