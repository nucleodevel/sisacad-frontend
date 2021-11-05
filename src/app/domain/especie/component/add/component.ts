import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Especie } from '../../entity/entity';
import { EspecieDto } from '../../dto/dto';
import { EspecieService } from '../../service/service';

@Component({
  selector: 'app-especie-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EspecieAddComponent extends AbstractAddComponent<Especie, EspecieDto, EspecieService> implements OnInit {

  constructor(protected service: EspecieService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'especies');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}