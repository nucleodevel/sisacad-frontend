import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { OfertaCurso } from '../../entity/entity';
import { OfertaCursoDto } from '../../dto/dto';
import { OfertaCursoService } from '../../service/service';

@Component({
  selector: 'app-oferta-curso-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class OfertaCursoViewComponent extends AbstractViewComponent<OfertaCurso, OfertaCursoDto, OfertaCursoService> implements OnInit {

  constructor(protected service: OfertaCursoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'oferta-curso');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}