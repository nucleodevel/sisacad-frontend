import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Curso } from '../../entity/entity';
import { CursoDto } from '../../dto/dto';
import { CursoService } from '../../service/service';

@Component({
  selector: 'app-curso-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CursoAddComponent extends AbstractAddComponent<Curso, CursoDto, CursoService> implements OnInit {

  constructor(protected service: CursoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'curso');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}