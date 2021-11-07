import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Cliente } from '../entity/entity';
import { ClienteDto } from '../dto/dto';

import { PessoaService } from '../../pessoa/service/service';

@Injectable()
export class ClienteService extends AbstractService<Cliente, ClienteDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'clientes';

  constructor(protected httpClient: HttpClient, protected pessoaService: PessoaService) {
    super(httpClient, ClienteService.apiUrl + ClienteService.apiPath);
  }

  newEntityInstance(): Cliente {
	return new Cliente();
  }

  newDtoInstance(): ClienteDto {
	return new ClienteDto();
  }

  makeEntityFromDto(dto: ClienteDto): Cliente {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.tipo = dto.tipo;

	this.pessoaService.findById(dto.pessoa).subscribe(data => {
      console.log(data)
      entity.pessoa = this.pessoaService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }

  getEntityString(entity: Cliente): string {
	return entity.pessoa.nome;
  }
}
