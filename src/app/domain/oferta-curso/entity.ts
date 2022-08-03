import { AbstractEntity } from '../abstract/entity';

import { Vestibular } from '../vestibular/entity';
import { EstruturaCurricular } from '../estrutura-curricular/entity';

export class OfertaCurso extends AbstractEntity {
	codigo!: string;
	ano!: number;
	vestibular!: Vestibular;
	estruturaCurricular!: EstruturaCurricular;

	toString(): string {
		return this.codigo + ' - ' + this.estruturaCurricular.curso.toString() + "/" + this.ano;
	}
}
