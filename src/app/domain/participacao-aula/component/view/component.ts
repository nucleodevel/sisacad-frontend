import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { ParticipacaoAula } from '../../entity/entity';
import { ParticipacaoAulaDto } from '../../dto/dto';
import { ParticipacaoAulaService } from '../../service/service';

@Component({
  selector: 'app-participacao-aula-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ParticipacaoAulaViewComponent extends AbstractViewComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> implements OnInit {

  constructor(protected service: ParticipacaoAulaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'participacao-aula');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}