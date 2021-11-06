import { AbstractEntity } from '../../abstract/entity/entity';

import { Especie } from '../../especie/entity/entity';
import { Raca } from '../../raca/entity/entity';

export class Pet extends AbstractEntity {
  idade!: number;	
  nome!: string;
  especie!: Especie;
  raca!: Raca;
}
