import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Vestibular } from '../entity/entity';
import { VestibularDto } from '../dto/dto';

@Injectable()
export class VestibularService extends AbstractService<Vestibular, VestibularDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'vestibular';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, VestibularService.apiUrl + VestibularService.apiPath);
  }

  newEntityInstance(): Vestibular {
	return new Vestibular();
  }

  newDtoInstance(): VestibularDto {
	return new VestibularDto();
  }

  makeEntityFromDto(dto: VestibularDto): Vestibular {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.ano = dto.ano;

    return entity;
  }

  getEntityString(entity: Vestibular): string {
	return entity.ano;
  }
}
