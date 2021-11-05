import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Raca } from '../../entity/entity';
import { RacaDto } from '../../dto/dto';
import { RacaService } from '../../service/service';

@Component({
  selector: 'app-raca-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class RacaViewComponent extends AbstractViewComponent<Raca, RacaDto, RacaService> implements OnInit {

  constructor(protected service: RacaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'racas');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}