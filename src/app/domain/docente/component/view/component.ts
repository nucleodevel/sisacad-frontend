import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Docente } from '../../entity/entity';
import { DocenteDto } from '../../dto/dto';
import { DocenteService } from '../../service/service';

@Component({
  selector: 'app-docente-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DocenteViewComponent extends AbstractViewComponent<Docente, DocenteDto, DocenteService> implements OnInit {

  constructor(protected service: DocenteService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'docente');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}