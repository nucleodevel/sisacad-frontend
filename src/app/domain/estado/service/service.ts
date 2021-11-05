import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Estado } from '../entity/entity';
import { EstadoDto } from '../dto/dto';

@Injectable()
export class EstadoService extends AbstractService<Estado, EstadoDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'estados';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, EstadoService.apiUrl + EstadoService.apiPath);
  }

  newEntityInstance(): Estado {
	return new Estado();
  }

  newDtoInstance(): EstadoDto {
	return new EstadoDto();
  }

  makeEntityFromDto(dto: EstadoDto): Estado {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;

    return entity;
  }

  getEntityString(entity: Estado): string {
	return entity.nome;
  }
}
