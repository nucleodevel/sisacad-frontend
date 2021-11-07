import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Cliente } from '../../entity/entity';
import { ClienteDto } from '../../dto/dto';
import { ClienteService } from '../../service/service';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ClienteViewComponent extends AbstractViewComponent<Cliente, ClienteDto, ClienteService> implements OnInit {

  constructor(protected service: ClienteService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'clientes');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}