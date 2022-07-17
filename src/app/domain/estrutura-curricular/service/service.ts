import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { EstruturaCurricular } from '../entity/entity';
import { EstruturaCurricularDto } from '../dto/dto';

import { CursoService } from '../../curso/service/service';

@Injectable()
export class EstruturaCurricularService extends AbstractService<EstruturaCurricular, EstruturaCurricularDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'estrutura-curricular';

  constructor(protected httpClient: HttpClient, protected cursoService: CursoService) {
    super(httpClient, EstruturaCurricularService.apiUrl + EstruturaCurricularService.apiPath);
  }

  newEntityInstance(): EstruturaCurricular {
	return new EstruturaCurricular();
  }

  newDtoInstance(): EstruturaCurricularDto {
	return new EstruturaCurricularDto();
  }

  makeEntityFromDto(dto: EstruturaCurricularDto): EstruturaCurricular {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.anoInicio = dto.anoInicio;
    entity.anoTermino = dto.anoTermino;

	this.cursoService.findById(dto.curso).subscribe(data => {
      console.log(data)
      entity.curso = this.cursoService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }
}
