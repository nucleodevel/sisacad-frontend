import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Especie } from '../../entity/entity';
import { EspecieDto } from '../../dto/dto';
import { EspecieService } from '../../service/service';

@Component({
  selector: 'app-especie-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EspecieViewComponent extends AbstractViewComponent<Especie, EspecieDto, EspecieService> implements OnInit {

  constructor(protected service: EspecieService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'especies');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}