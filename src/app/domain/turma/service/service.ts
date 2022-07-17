import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Turma } from '../entity/entity';
import { TurmaDto } from '../dto/dto';

import { OfertaCursoService } from '../../oferta-curso/service/service';

@Injectable()
export class TurmaService extends AbstractService<Turma, TurmaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'turma';

  constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService) {
    super(httpClient, TurmaService.apiUrl + TurmaService.apiPath);
  }

  newEntityInstance(): Turma {
	return new Turma();
  }

  newDtoInstance(): TurmaDto {
	return new TurmaDto();
  }

  makeEntityFromDto(dto: TurmaDto): Turma {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;

	this.ofertaCursoService.findById(dto.ofertaCurso).subscribe(data => {
      console.log(data)
      entity.ofertaCurso = this.ofertaCursoService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }
}
