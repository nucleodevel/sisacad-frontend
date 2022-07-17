import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Turma } from '../../entity/entity';
import { TurmaDto } from '../../dto/dto';
import { TurmaService } from '../../service/service';

@Component({
  selector: 'app-turma-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class TurmaViewComponent extends AbstractViewComponent<Turma, TurmaDto, TurmaService> implements OnInit {

  constructor(protected service: TurmaService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'turma');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}