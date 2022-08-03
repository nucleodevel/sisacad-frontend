import { AbstractEntity } from '../abstract/entity';

export class Vestibular extends AbstractEntity {
  ano!: string;

  toString(): string {
	return '' + this.ano; 
  }
}
