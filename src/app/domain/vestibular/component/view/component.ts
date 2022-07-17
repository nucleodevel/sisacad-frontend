import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Vestibular } from '../../entity/entity';
import { VestibularDto } from '../../dto/dto';
import { VestibularService } from '../../service/service';

@Component({
  selector: 'app-vestibular-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class VestibularViewComponent extends AbstractViewComponent<Vestibular, VestibularDto, VestibularService> implements OnInit {

  constructor(protected service: VestibularService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'vestibular');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}