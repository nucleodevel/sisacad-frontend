import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';
import { EstadoService } from '../../service/service';
import { Estado } from '../../entity/entity';

@Component({
  selector: 'app-estado-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoAddComponent extends AbstractAddComponent<Estado, EstadoService> implements OnInit {

  constructor(protected entityService: EstadoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(entityService, router, route, 'estados');
  }

  newEntityInstance(): Estado {
	return new Estado();
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}