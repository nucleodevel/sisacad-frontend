import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AbstractViewComponent } from '../../../abstract/component/view/component';

import { Pet } from '../../entity/entity';
import { PetDto } from '../../dto/dto';
import { PetService } from '../../service/service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PetViewComponent extends AbstractViewComponent<Pet, PetDto, PetService> implements OnInit {

  constructor(protected service: PetService,
    protected router: Router, protected route: ActivatedRoute) {
	super(service, router, route, 'pets');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}