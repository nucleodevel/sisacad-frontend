import { AbstractEntity } from '../../abstract/entity/entity';

import { Estado } from '../../estado/entity/entity';

export class Cidade extends AbstractEntity {
  nome!: string;
  estado!: Estado;
}
