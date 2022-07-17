import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Docente } from '../../entity/entity';
import { DocenteDto } from '../../dto/dto';
import { DocenteService } from '../../service/service';

@Component({
  selector: 'app-docente-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DocenteEditComponent extends AbstractEditComponent<Docente, DocenteDto, DocenteService> implements OnInit {

  constructor(protected service: DocenteService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'docente');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}