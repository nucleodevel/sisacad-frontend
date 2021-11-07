import { AbstractEntity } from '../../abstract/entity/entity';

export class Pessoa extends AbstractEntity {
  nome!: string;
  email!: string;
  codNacional!: number;
}
