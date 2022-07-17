import { AbstractEntity } from '../../abstract/entity/entity';

export class Vestibular extends AbstractEntity {
  ano!: string;

  toString(): string {
	return '' + this.ano; 
  }
}
