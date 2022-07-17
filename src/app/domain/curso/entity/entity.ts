import { AbstractEntity } from '../../abstract/entity/entity';

export class Curso extends AbstractEntity {
  nome!: string;

  toString(): string {
	return '' + this.nome; 
  }
}
