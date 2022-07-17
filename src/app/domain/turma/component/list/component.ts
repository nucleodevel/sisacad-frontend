import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Turma } from '../../entity/entity';
import { TurmaDto } from '../../dto/dto';
import { TurmaService } from '../../service/service';

@Component({
  selector: 'app-turma-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class TurmaListComponent extends AbstractListComponent<Turma, TurmaDto, TurmaService> implements OnInit {

  constructor(protected service: TurmaService,
    protected router: Router) {
	super(service, router, 'turma');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}