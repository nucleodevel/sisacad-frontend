import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Estado } from '../../entity/entity';
import { EstadoDto } from '../../dto/dto';
import { EstadoService } from '../../service/service';

@Component({
  selector: 'app-estado-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoEditComponent extends AbstractEditComponent<Estado, EstadoDto, EstadoService> implements OnInit {

  constructor(protected service: EstadoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}