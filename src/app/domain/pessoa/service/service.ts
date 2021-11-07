import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Pessoa } from '../entity/entity';
import { PessoaDto } from '../dto/dto';

@Injectable()
export class PessoaService extends AbstractService<Pessoa, PessoaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'pessoas';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, PessoaService.apiUrl + PessoaService.apiPath);
  }

  newEntityInstance(): Pessoa {
	return new Pessoa();
  }

  newDtoInstance(): PessoaDto {
	return new PessoaDto();
  }

  makeEntityFromDto(dto: PessoaDto): Pessoa {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;
    entity.email = dto.email;
    entity.codNacional = dto.codNacional;

    return entity;
  }

  getEntityString(entity: Pessoa): string {
	return entity.nome;
  }
}
