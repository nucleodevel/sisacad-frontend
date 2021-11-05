import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Estado } from '../../entity/entity';
import { EstadoDto } from '../../dto/dto';
import { EstadoService } from '../../service/service';

@Component({
  selector: 'app-estado-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoAddComponent extends AbstractAddComponent<Estado, EstadoDto, EstadoService> implements OnInit {

  constructor(protected service: EstadoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}