import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Vestibular } from '../../entity/entity';
import { VestibularDto } from '../../dto/dto';
import { VestibularService } from '../../service/service';

@Component({
  selector: 'app-vestibular-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class VestibularAddComponent extends AbstractAddComponent<Vestibular, VestibularDto, VestibularService> implements OnInit {

  constructor(protected service: VestibularService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'vestibular');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}