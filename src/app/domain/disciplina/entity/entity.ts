import { AbstractEntity } from '../../abstract/entity/entity';

export class Disciplina extends AbstractEntity {
	codigo!: string;
	nome!: string;

	toString(): string {
		return this.codigo + ' - ' + this.nome;
	}
}
