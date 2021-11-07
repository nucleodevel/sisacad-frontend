import { AbstractEntity } from '../../abstract/entity/entity';

import { Pessoa } from '../../pessoa/entity/entity';

export class Cliente extends AbstractEntity {
  tipo!: string;
  pessoa!: Pessoa;
}
