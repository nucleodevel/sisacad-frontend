import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Estado } from '../../entity/entity';
import { EstadoDto } from '../../dto/dto';
import { EstadoService } from '../../service/service';

@Component({
  selector: 'app-estado-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoListComponent extends AbstractListComponent<Estado, EstadoDto, EstadoService> implements OnInit {

  constructor(protected service: EstadoService,
    protected router: Router) {
	super(service, router, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}