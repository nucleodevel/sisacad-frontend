import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';
import { EstadoService } from '../../service/service';
import { Estado } from '../../entity/entity';

@Component({
  selector: 'app-estado-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoListComponent extends AbstractListComponent<Estado, EstadoService> implements OnInit {

  constructor(protected entityService: EstadoService,
    protected router: Router) {
	super(entityService, router, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

  getEntityString(entity: Estado): string {
	return entity.nome;
  }

}