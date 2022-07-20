import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { ParticipacaoAula } from '../entity/entity';
import { ParticipacaoAulaDto } from '../dto/dto';

import { AulaService } from '../../aula/service/service';
import { DiscenteService } from '../../discente/service/service';

@Injectable()
export class ParticipacaoAulaService extends AbstractService<ParticipacaoAula, ParticipacaoAulaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'participacao-aula';

  constructor(protected httpClient: HttpClient, protected aulaService: AulaService, protected discenteService: DiscenteService) {
    super(httpClient, ParticipacaoAulaService.apiUrl + ParticipacaoAulaService.apiPath);
  }

  newEntityInstance(): ParticipacaoAula {
	return new ParticipacaoAula();
  }

  newDtoInstance(): ParticipacaoAulaDto {
	return new ParticipacaoAulaDto();
  }

  makeEntityFromDto(dto: ParticipacaoAulaDto): ParticipacaoAula {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;

	this.aulaService.findById(dto.aula).subscribe(data => {
      console.log(data)
      entity.aula = this.aulaService.makeEntityFromDto(data);
    }, error => console.log(error));

	this.discenteService.findById(dto.discente).subscribe(data => {
      console.log(data)
      entity.discente = this.discenteService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }
}
