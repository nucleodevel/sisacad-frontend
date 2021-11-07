import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Endereco } from '../../entity/entity';
import { EnderecoDto } from '../../dto/dto';
import { EnderecoService } from '../../service/service';

@Component({
  selector: 'app-endereco-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EnderecoViewComponent extends AbstractViewComponent<Endereco, EnderecoDto, EnderecoService> implements OnInit {

  constructor(protected service: EnderecoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'enderecos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}