import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Cidade } from '../entity/entity';
import { CidadeDto } from '../dto/dto';

import { EstadoService } from '../../estado/service/service';

@Injectable()
export class CidadeService extends AbstractService<Cidade, CidadeDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'cidades';

  constructor(protected httpClient: HttpClient, protected estadoService: EstadoService) {
    super(httpClient, CidadeService.apiUrl + CidadeService.apiPath);
  }

  newEntityInstance(): Cidade {
	return new Cidade();
  }

  newDtoInstance(): CidadeDto {
	return new CidadeDto();
  }

  makeEntityFromDto(dto: CidadeDto): Cidade {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;

	this.estadoService.findById(dto.estado).subscribe(data => {
      console.log(data)
      entity.estado = this.estadoService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }

  getEntityString(entity: Cidade): string {
	return entity.nome;
  }
}
