import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Discente } from '../../entity/entity';
import { DiscenteDto } from '../../dto/dto';
import { DiscenteService } from '../../service/service';

@Component({
  selector: 'app-discente-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DiscenteViewComponent extends AbstractViewComponent<Discente, DiscenteDto, DiscenteService> implements OnInit {

  constructor(protected service: DiscenteService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'discente');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}