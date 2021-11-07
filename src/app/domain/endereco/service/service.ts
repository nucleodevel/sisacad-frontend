import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Endereco } from '../entity/entity';
import { EnderecoDto } from '../dto/dto';

import { CidadeService } from '../../cidade/service/service';
import { PessoaService } from '../../pessoa/service/service';

@Injectable()
export class EnderecoService extends AbstractService<Endereco, EnderecoDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'enderecos';

  constructor(protected httpClient: HttpClient, protected cidadeService: CidadeService, 
      protected pessoaService: PessoaService) {
    super(httpClient, EnderecoService.apiUrl + EnderecoService.apiPath);
  }

  newEntityInstance(): Endereco {
	return new Endereco();
  }

  newDtoInstance(): EnderecoDto {
	return new EnderecoDto();
  }

  makeEntityFromDto(dto: EnderecoDto): Endereco {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.logradouro = dto.logradouro;
    entity.numero = dto.numero;
    entity.complemento = dto.complemento;
    entity.bairro = dto.bairro;
    entity.cep = dto.cep;

	this.cidadeService.findById(dto.cidade).subscribe(data => {
      console.log(data)
      entity.cidade = this.cidadeService.makeEntityFromDto(data);
    }, error => console.log(error));

	this.pessoaService.findById(dto.pessoa).subscribe(data => {
      console.log(data)
      entity.pessoa = this.pessoaService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }

  getEntityString(entity: Endereco): string {
	return entity.logradouro + ", " + entity.numero + " - " 
	    + entity.cidade.nome + "/" + entity.cidade.estado.nome;
  }
}
