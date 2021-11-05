import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Raca } from '../../entity/entity';
import { RacaDto } from '../../dto/dto';
import { RacaService } from '../../service/service';

@Component({
  selector: 'app-raca-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class RacaListComponent extends AbstractListComponent<Raca, RacaDto, RacaService> implements OnInit {

  constructor(protected service: RacaService,
    protected router: Router) {
	super(service, router, 'racas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}