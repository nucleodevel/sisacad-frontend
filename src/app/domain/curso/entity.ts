import { AbstractEntity } from '../abstract/entity';

export class Curso extends AbstractEntity {
	codigo!: string;
	nome!: string;

	toString(): string {
		return this.codigo + ' - ' + this.nome;
	}
}
