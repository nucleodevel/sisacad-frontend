import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Vestibulando } from '../../entity/entity';
import { VestibulandoDto } from '../../dto/dto';
import { VestibulandoService } from '../../service/service';

@Component({
  selector: 'app-vestibulando-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class VestibulandoViewComponent extends AbstractViewComponent<Vestibulando, VestibulandoDto, VestibulandoService> implements OnInit {

  constructor(protected service: VestibulandoService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'vestibulando');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}