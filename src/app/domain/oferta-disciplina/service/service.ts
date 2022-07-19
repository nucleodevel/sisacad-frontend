import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { OfertaDisciplina } from '../entity/entity';
import { OfertaDisciplinaDto } from '../dto/dto';

import { DisciplinaService } from '../../disciplina/service/service';
import { DocenteService } from '../../docente/service/service';

@Injectable()
export class OfertaDisciplinaService extends AbstractService<OfertaDisciplina, OfertaDisciplinaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'oferta-disciplina';

  constructor(protected httpClient: HttpClient, protected disciplinaService: DisciplinaService, protected docenteService: DocenteService) {
    super(httpClient, OfertaDisciplinaService.apiUrl + OfertaDisciplinaService.apiPath);
  }

  newEntityInstance(): OfertaDisciplina {
	return new OfertaDisciplina();
  }

  newDtoInstance(): OfertaDisciplinaDto {
	return new OfertaDisciplinaDto();
  }

  makeEntityFromDto(dto: OfertaDisciplinaDto): OfertaDisciplina {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;

	this.disciplinaService.findById(dto.disciplina).subscribe(data => {
      console.log(data)
      entity.disciplina = this.disciplinaService.makeEntityFromDto(data);
    }, error => console.log(error));

	this.docenteService.findById(dto.docente).subscribe(data => {
      console.log(data)
      entity.docente = this.docenteService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }
}
