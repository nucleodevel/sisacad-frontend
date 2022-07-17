import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Docente } from '../entity/entity';
import { DocenteDto } from '../dto/dto';

@Injectable()
export class DocenteService extends AbstractService<Docente, DocenteDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'docente';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, DocenteService.apiUrl + DocenteService.apiPath);
  }

  newEntityInstance(): Docente {
	return new Docente();
  }

  newDtoInstance(): DocenteDto {
	return new DocenteDto();
  }

  makeEntityFromDto(dto: DocenteDto): Docente {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;

    return entity;
  }

  getEntityString(entity: Docente): string {
	return entity.nome;
  }
}
