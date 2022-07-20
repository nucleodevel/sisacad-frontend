import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { AvaliacaoVestibulando } from '../../entity/entity';
import { AvaliacaoVestibulandoDto } from '../../dto/dto';
import { AvaliacaoVestibulandoService } from '../../service/service';

@Component({
  selector: 'app-avaliacao-vestibulando-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class AvaliacaoVestibulandoViewComponent extends AbstractViewComponent<AvaliacaoVestibulando, AvaliacaoVestibulandoDto, AvaliacaoVestibulandoService> implements OnInit {

  constructor(protected service: AvaliacaoVestibulandoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'avaliacao-vestibulando');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}