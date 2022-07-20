import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Avaliacao } from '../../entity/entity';
import { AvaliacaoDto } from '../../dto/dto';
import { AvaliacaoService } from '../../service/service';

@Component({
  selector: 'app-avaliacao-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class AvaliacaoViewComponent extends AbstractViewComponent<Avaliacao, AvaliacaoDto, AvaliacaoService> implements OnInit {

  constructor(protected service: AvaliacaoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'avaliacao');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}