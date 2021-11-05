import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Produto } from '../entity/entity';
import { ProdutoDto } from '../dto/dto';

@Injectable()
export class ProdutoService extends AbstractService<Produto, ProdutoDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'produtos';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, ProdutoService.apiUrl + ProdutoService.apiPath);
  }

  newEntityInstance(): Produto {
	return new Produto();
  }

  newDtoInstance(): ProdutoDto {
	return new ProdutoDto();
  }

  makeEntityFromDto(dto: ProdutoDto): Produto {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.nome = dto.nome;
    entity.preco = dto.preco;

    return entity;
  }

  getEntityString(entity: Produto): string {
	return entity.nome;
  }
}
