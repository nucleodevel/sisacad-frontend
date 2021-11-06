import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Pet } from '../entity/entity';
import { PetDto } from '../dto/dto';

import { EspecieService } from '../../especie/service/service';
import { RacaService } from '../../raca/service/service';

@Injectable()
export class PetService extends AbstractService<Pet, PetDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'pets';

  constructor(protected httpClient: HttpClient, protected especieService: EspecieService, 
      protected racaService: RacaService) {
    super(httpClient, PetService.apiUrl + PetService.apiPath);
  }

  newEntityInstance(): Pet {
	return new Pet();
  }

  newDtoInstance(): PetDto {
	return new PetDto();
  }

  makeEntityFromDto(dto: PetDto): Pet {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;

	this.especieService.findById(dto.especie).subscribe(data => {
      console.log(data)
      entity.especie = this.especieService.makeEntityFromDto(data);
    }, error => console.log(error));

	this.racaService.findById(dto.raca).subscribe(data => {
      console.log(data)
      entity.raca = this.racaService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }

  getEntityString(entity: Pet): string {
	return entity.nome;
  }
}
