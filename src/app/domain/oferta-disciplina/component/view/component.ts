import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { OfertaDisciplina } from '../../entity/entity';
import { OfertaDisciplinaDto } from '../../dto/dto';
import { OfertaDisciplinaService } from '../../service/service';

@Component({
  selector: 'app-oferta-disciplina-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class OfertaDisciplinaViewComponent extends AbstractViewComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> implements OnInit {

  constructor(protected service: OfertaDisciplinaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'oferta-disciplina');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}