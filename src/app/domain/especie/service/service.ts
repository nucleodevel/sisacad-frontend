import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Especie } from '../entity/entity';
import { EspecieDto } from '../dto/dto';

@Injectable()
export class EspecieService extends AbstractService<Especie, EspecieDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'especies';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, EspecieService.apiUrl + EspecieService.apiPath);
  }

  newEntityInstance(): Especie {
	return new Especie();
  }

  newDtoInstance(): EspecieDto {
	return new EspecieDto();
  }

  makeEntityFromDto(dto: EspecieDto): Especie {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.descricao = dto.descricao;

    return entity;
  }

  getEntityString(entity: Especie): string {
	return entity.descricao;
  }
}
