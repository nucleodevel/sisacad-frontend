import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Docente } from '../../entity/entity';
import { DocenteDto } from '../../dto/dto';
import { DocenteService } from '../../service/service';

@Component({
  selector: 'app-docente-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DocenteListComponent extends AbstractListComponent<Docente, DocenteDto, DocenteService> implements OnInit {

  constructor(protected service: DocenteService,
    protected router: Router) {
	super(service, router, 'docente');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}