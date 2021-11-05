import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Categoria } from '../entity/entity';
import { CategoriaDto } from '../dto/dto';

@Injectable()
export class CategoriaService extends AbstractService<Categoria, CategoriaDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'categorias';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, CategoriaService.apiUrl + CategoriaService.apiPath);
  }

  newEntityInstance(): Categoria {
	return new Categoria();
  }

  newDtoInstance(): CategoriaDto {
	return new CategoriaDto();
  }

  makeEntityFromDto(dto: CategoriaDto): Categoria {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;

    return entity;
  }

  getEntityString(entity: Categoria): string {
	return entity.nome;
  }
}
