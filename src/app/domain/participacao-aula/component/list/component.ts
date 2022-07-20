import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { ParticipacaoAula } from '../../entity/entity';
import { ParticipacaoAulaDto } from '../../dto/dto';
import { ParticipacaoAulaService } from '../../service/service';

@Component({
  selector: 'app-participacao-aula-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ParticipacaoAulaListComponent extends AbstractListComponent<ParticipacaoAula, ParticipacaoAulaDto, ParticipacaoAulaService> implements OnInit {

  constructor(protected service: ParticipacaoAulaService,
    protected router: Router) {
	super(service, router, 'participacao-aula');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}