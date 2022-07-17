import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Disciplina } from '../../entity/entity';
import { DisciplinaDto } from '../../dto/dto';
import { DisciplinaService } from '../../service/service';

@Component({
  selector: 'app-disciplina-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DisciplinaEditComponent extends AbstractEditComponent<Disciplina, DisciplinaDto, DisciplinaService> implements OnInit {

  constructor(protected service: DisciplinaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'disciplina');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}