import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Disciplina } from '../../entity/entity';
import { DisciplinaDto } from '../../dto/dto';
import { DisciplinaService } from '../../service/service';

@Component({
  selector: 'app-disciplina-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DisciplinaViewComponent extends AbstractViewComponent<Disciplina, DisciplinaDto, DisciplinaService> implements OnInit {

  constructor(protected service: DisciplinaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'disciplina');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}