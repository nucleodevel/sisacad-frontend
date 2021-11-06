import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { Pet } from '../../entity/entity';
import { PetDto } from '../../dto/dto';
import { PetService } from '../../service/service';

import { Especie } from '../../../especie/entity/entity';
import { EspecieService } from '../../../especie/service/service';

import { Raca } from '../../../raca/entity/entity';
import { RacaService } from '../../../raca/service/service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class PetAddComponent extends AbstractAddComponent<Pet, PetDto, PetService> implements OnInit {
	
  especies!: Especie[];
  racas!: Raca[];

  constructor(protected service: PetService, protected router: Router, protected route: ActivatedRoute, 
      protected especieService: EspecieService, protected racaService: RacaService) {
	super(service, router, route, 'pets');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.especieService.findAll().subscribe(data => {
	  this.especies = this.especieService.makeEntityArrayFromDtoArray(data);
    });
	
	this.racaService.findAll().subscribe(data => {
	  this.racas = this.racaService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareEspecie(o1: Especie, o2: Especie) {
	return o1.compare(o2);
  }

  compareRaca(o1: Raca, o2: Raca) {
	return o1.compare(o2);
  }

}