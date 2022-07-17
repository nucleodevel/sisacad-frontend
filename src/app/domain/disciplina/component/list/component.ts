import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Disciplina } from '../../entity/entity';
import { DisciplinaDto } from '../../dto/dto';
import { DisciplinaService } from '../../service/service';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DisciplinaListComponent extends AbstractListComponent<Disciplina, DisciplinaDto, DisciplinaService> implements OnInit {

  constructor(protected service: DisciplinaService,
    protected router: Router) {
	super(service, router, 'disciplina');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}