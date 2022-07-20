import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Discente } from '../../entity/entity';
import { DiscenteDto } from '../../dto/dto';
import { DiscenteService } from '../../service/service';

@Component({
  selector: 'app-discente-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DiscenteListComponent extends AbstractListComponent<Discente, DiscenteDto, DiscenteService> implements OnInit {

  constructor(protected service: DiscenteService,
    protected router: Router) {
	super(service, router, 'discente');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}