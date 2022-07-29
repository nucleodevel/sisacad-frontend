import { AbstractEntity } from '../../abstract/entity/entity';

export class Docente extends AbstractEntity {
	cpf!: string;
	nome!: string;

	toString(): string {
		return this.cpf + ' - ' + this.nome;
	}
}
