import { AbstractEntity } from '../../abstract/entity/entity';

export class Disciplina extends AbstractEntity {
  nome!: string;

  toString(): string {
	return '' + this.nome; 
  }
}
