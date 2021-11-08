import { AbstractEntity } from '../../abstract/entity/entity';

import { FuncionarioFuncao } from '../enum/funcionario-funcao';

import { Pessoa } from '../../pessoa/entity/entity';

export class Funcionario extends AbstractEntity {
  funcao!: FuncionarioFuncao;
  pessoa!: Pessoa;
}
