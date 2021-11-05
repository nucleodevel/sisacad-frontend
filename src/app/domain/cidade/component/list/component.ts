import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Cidade } from '../../entity/entity';
import { CidadeDto } from '../../dto/dto';
import { CidadeService } from '../../service/service';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CidadeListComponent extends AbstractListComponent<Cidade, CidadeDto, CidadeService> implements OnInit {

  constructor(protected service: CidadeService,
    protected router: Router) {
	super(service, router, 'cidades');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}