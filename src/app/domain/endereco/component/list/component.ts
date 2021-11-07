import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Endereco } from '../../entity/entity';
import { EnderecoDto } from '../../dto/dto';
import { EnderecoService } from '../../service/service';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EnderecoListComponent extends AbstractListComponent<Endereco, EnderecoDto, EnderecoService> implements OnInit {

  constructor(protected service: EnderecoService,
    protected router: Router) {
	super(service, router, 'enderecos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}