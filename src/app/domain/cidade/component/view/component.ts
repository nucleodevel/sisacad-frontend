import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Cidade } from '../../entity/entity';
import { CidadeDto } from '../../dto/dto';
import { CidadeService } from '../../service/service';

@Component({
  selector: 'app-cidade-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class CidadeViewComponent extends AbstractViewComponent<Cidade, CidadeDto, CidadeService> implements OnInit {

  constructor(protected service: CidadeService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'cidades');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}