import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';
import { EstadoService } from '../../service/service';
import { Estado } from '../../entity/entity';

@Component({
  selector: 'app-estado-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoViewComponent extends AbstractViewComponent<Estado, EstadoService> implements OnInit {

  constructor(protected entityService: EstadoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}