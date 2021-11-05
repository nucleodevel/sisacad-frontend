import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Raca } from '../entity/entity';
import { RacaDto } from '../dto/dto';

@Injectable()
export class RacaService extends AbstractService<Raca, RacaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'racas';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, RacaService.apiUrl + RacaService.apiPath);
  }

  newEntityInstance(): Raca {
	return new Raca();
  }

  newDtoInstance(): RacaDto {
	return new RacaDto();
  }

  makeEntityFromDto(dto: RacaDto): Raca {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.descricao = dto.descricao;

    return entity;
  }

  getEntityString(entity: Raca): string {
	return entity.descricao;
  }
}
