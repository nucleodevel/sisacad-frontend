import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../../abstract/service/service';
import { Funcionario } from '../entity/entity';
import { FuncionarioDto } from '../dto/dto';

import { FuncionarioFuncao } from '../enum/funcionario-funcao';

import { PessoaService } from '../../pessoa/service/service';

@Injectable()
export class FuncionarioService extends AbstractService<Funcionario, FuncionarioDto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'funcionarios';

  constructor(protected httpClient: HttpClient, protected pessoaService: PessoaService) {
    super(httpClient, FuncionarioService.apiUrl + FuncionarioService.apiPath);
  }

  newEntityInstance(): Funcionario {
	return new Funcionario();
  }

  newDtoInstance(): FuncionarioDto {
	return new FuncionarioDto();
  }

  makeEntityFromDto(dto: FuncionarioDto): Funcionario {
    var entity = this.newEntityInstance();
    
    entity.id = dto.id;
    entity.funcao = (<any>FuncionarioFuncao)[dto.funcao];

	this.pessoaService.findById(dto.pessoa).subscribe(data => {
      console.log(data)
      entity.pessoa = this.pessoaService.makeEntityFromDto(data);
    }, error => console.log(error));

    return entity;
  }

  getEntityString(entity: Funcionario): string {
	return entity.pessoa.nome;
  }
}
