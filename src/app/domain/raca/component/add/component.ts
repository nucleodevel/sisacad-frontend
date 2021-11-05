import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Raca } from '../../entity/entity';
import { RacaDto } from '../../dto/dto';
import { RacaService } from '../../service/service';

@Component({
  selector: 'app-raca-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class RacaAddComponent extends AbstractAddComponent<Raca, RacaDto, RacaService> implements OnInit {

  constructor(protected service: RacaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'racas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}