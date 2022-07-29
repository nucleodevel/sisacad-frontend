import { AbstractEntity } from '../../abstract/entity/entity';

import { Vestibular } from '../../vestibular/entity/entity';
import { EstruturaCurricular } from '../../estrutura-curricular/entity/entity';

export class OfertaCurso extends AbstractEntity {
	codigo!: string;
	ano!: number;
	vestibular!: Vestibular;
	estruturaCurricular!: EstruturaCurricular;

	toString(): string {
		return this.codigo + ' - ' + this.estruturaCurricular.curso.toString() + "/" + this.ano;
	}
}
