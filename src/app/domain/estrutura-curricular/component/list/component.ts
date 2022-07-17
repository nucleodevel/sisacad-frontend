import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { EstruturaCurricular } from '../../entity/entity';
import { EstruturaCurricularDto } from '../../dto/dto';
import { EstruturaCurricularService } from '../../service/service';

@Component({
  selector: 'app-estrutura-curricular-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstruturaCurricularListComponent extends AbstractListComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> implements OnInit {

  constructor(protected service: EstruturaCurricularService,
    protected router: Router) {
	super(service, router, 'estrutura-curricular');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}