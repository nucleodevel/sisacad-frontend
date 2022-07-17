import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { EstruturaCurricular } from '../../entity/entity';
import { EstruturaCurricularDto } from '../../dto/dto';
import { EstruturaCurricularService } from '../../service/service';

@Component({
  selector: 'app-estrutura-curricular-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstruturaCurricularViewComponent extends AbstractViewComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> implements OnInit {

  constructor(protected service: EstruturaCurricularService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'estrutura-curricular');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}