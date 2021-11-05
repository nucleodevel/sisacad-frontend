import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Especie } from '../../entity/entity';
import { EspecieDto } from '../../dto/dto';
import { EspecieService } from '../../service/service';

@Component({
  selector: 'app-especie-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EspecieEditComponent extends AbstractEditComponent<Especie, EspecieDto, EspecieService> implements OnInit {

  constructor(protected service: EspecieService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'especies');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}