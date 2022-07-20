import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Vestibulando } from '../../entity/entity';
import { VestibulandoDto } from '../../dto/dto';
import { VestibulandoService } from '../../service/service';

@Component({
  selector: 'app-vestibulando-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class VestibulandoListComponent extends AbstractListComponent<Vestibulando, VestibulandoDto, VestibulandoService> implements OnInit {

  constructor(protected service: VestibulandoService,
    protected router: Router) {
	super(service, router, 'vestibulando');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}