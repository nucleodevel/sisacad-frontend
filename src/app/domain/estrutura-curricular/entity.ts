import { AbstractEntity } from '../abstract/entity';

import { Curso } from '../curso/entity';

export class EstruturaCurricular extends AbstractEntity {
	codigo!: string;
	anoInicio!: number;
	anoTermino!: number;
	curso!: Curso;

	toString(): string {
		return this.codigo + ' - ' + this.curso.toString();
	}
}
