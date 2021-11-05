import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Estado } from '../../entity/entity';
import { EstadoDto } from '../../dto/dto';
import { EstadoService } from '../../service/service';

@Component({
  selector: 'app-estado-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstadoViewComponent extends AbstractViewComponent<Estado, EstadoDto, EstadoService> implements OnInit {

  constructor(protected service: EstadoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'estados');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}