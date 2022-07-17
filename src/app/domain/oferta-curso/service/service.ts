import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { OfertaCurso } from '../entity/entity';
import { OfertaCursoDto } from '../dto/dto';

import { VestibularService } from '../../vestibular/service/service';
import { EstruturaCurricularService } from '../../estrutura-curricular/service/service';

@Injectable()
export class OfertaCursoService extends AbstractService<OfertaCurso, OfertaCursoDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'oferta-curso';

  constructor(protected httpClient: HttpClient, protected vestibularService: VestibularService, 
      protected estruturaCurricularService: EstruturaCurricularService) {
    super(httpClient, OfertaCursoService.apiUrl + OfertaCursoService.apiPath);
  }

  newEntityInstance(): OfertaCurso {
	return new OfertaCurso();
  }

  newDtoInstance(): OfertaCursoDto {
	return new OfertaCursoDto();
  }

  makeEntityFromDto(dto: OfertaCursoDto): OfertaCurso {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.ano = dto.ano;

	this.vestibularService.findById(dto.vestibular).subscribe(data => {
      console.log(data)
      entity.vestibular = this.vestibularService.makeEntityFromDto(data);
    }, error => console.log(error));

	this.estruturaCurricularService.findById(dto.estruturaCurricular).subscribe(data => {
      console.log(data)
      entity.estruturaCurricular = this.estruturaCurricularService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }
}
