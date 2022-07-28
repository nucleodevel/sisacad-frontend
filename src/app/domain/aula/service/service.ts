import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Aula } from '../entity/entity';
import { AulaDto } from '../dto/dto';

import { OfertaDisciplinaService } from '../../oferta-disciplina/service/service';

@Injectable()
export class AulaService extends AbstractService<Aula, AulaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'aula';

  constructor(protected httpClient: HttpClient, protected ofertaDisciplinaService: OfertaDisciplinaService) {
    super(httpClient, AulaService.apiUrl + AulaService.apiPath);
  }

  newEntityInstance(): Aula {
	return new Aula();
  }

  newDtoInstance(): AulaDto {
	return new AulaDto();
  }

  makeEntityFromDto(dto: AulaDto): Aula {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.inicio = dto.inicio;
    entity.termino = dto.termino;

	this.ofertaDisciplinaService.findById(dto.ofertaDisciplina).subscribe(data => {
      console.log(data);
      entity.ofertaDisciplina = this.ofertaDisciplinaService.makeEntityFromDto(data);
    });

    return entity;
  }
}
