import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Disciplina } from '../../entity/entity';
import { DisciplinaDto } from '../../dto/dto';
import { DisciplinaService } from '../../service/service';

@Component({
  selector: 'app-disciplina-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DisciplinaAddComponent extends AbstractAddComponent<Disciplina, DisciplinaDto, DisciplinaService> implements OnInit {

  constructor(protected service: DisciplinaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'disciplina');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}