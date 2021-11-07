import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Cliente } from '../../entity/entity';
import { ClienteDto } from '../../dto/dto';
import { ClienteService } from '../../service/service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ClienteListComponent extends AbstractListComponent<Cliente, ClienteDto, ClienteService> implements OnInit {

  constructor(protected service: ClienteService,
    protected router: Router) {
	super(service, router, 'clientes');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}