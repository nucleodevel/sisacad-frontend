import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { Pet } from '../../entity/entity';
import { PetDto } from '../../dto/dto';
import { PetService } from '../../service/service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PetListComponent extends AbstractListComponent<Pet, PetDto, PetService> implements OnInit {

  constructor(protected service: PetService,
    protected router: Router) {
	super(service, router, 'pets');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}