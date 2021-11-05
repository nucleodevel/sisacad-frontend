import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Especie } from '../../entity/entity';
import { EspecieDto } from '../../dto/dto';
import { EspecieService } from '../../service/service';

@Component({
  selector: 'app-especie-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EspecieListComponent extends AbstractListComponent<Especie, EspecieDto, EspecieService> implements OnInit {

  constructor(protected service: EspecieService,
    protected router: Router) {
	super(service, router, 'especies');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}