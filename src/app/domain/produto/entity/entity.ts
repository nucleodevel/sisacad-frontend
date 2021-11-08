import { AbstractEntity } from '../../abstract/entity/entity';

import { Categoria } from '../../categoria/entity/entity';

export class Produto extends AbstractEntity {
  nome!: string;
  preco!: number;

  categorias!: Categoria[];
}
