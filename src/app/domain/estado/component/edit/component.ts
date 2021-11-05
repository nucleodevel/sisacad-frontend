import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';
import { EstadoService } from '../../service/service';
import { Estado } from '../../entity/entity';

@Component({
  selector: 'app-estado-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoEditComponent extends AbstractEditComponent<Estado, EstadoService> implements OnInit {

  constructor(protected entityService: EstadoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}