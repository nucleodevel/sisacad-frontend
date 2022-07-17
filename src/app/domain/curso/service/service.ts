import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Curso } from '../entity/entity';
import { CursoDto } from '../dto/dto';

@Injectable()
export class CursoService extends AbstractService<Curso, CursoDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'curso';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, CursoService.apiUrl + CursoService.apiPath);
  }

  newEntityInstance(): Curso {
	return new Curso();
  }

  newDtoInstance(): CursoDto {
	return new CursoDto();
  }

  makeEntityFromDto(dto: CursoDto): Curso {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;

    return entity;
  }
}
