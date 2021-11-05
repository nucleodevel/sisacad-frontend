import { AbstractEntity } from '../../abstract/entity/entity';

export class Produto extends AbstractEntity {
  nome!: string;
  preco!: number;
}
