import { AbstractEntity } from '../../abstract/entity/entity';

import { Cidade } from '../../cidade/entity/entity';
import { Pessoa } from '../../pessoa/entity/entity';

export class Endereco extends AbstractEntity {
  logradouro!: string;	
  numero!: string;
  complemento!: string;
  bairro!: string;
  cep!: string;
  cidade!: Cidade;
  pessoa!: Pessoa;
}
