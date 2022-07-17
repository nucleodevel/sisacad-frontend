import { AbstractEntity } from '../../abstract/entity/entity';

export class Docente extends AbstractEntity {
  nome!: string;

  toString(): string {
	return '' + this.nome; 
  }
}
