import { AbstractEntity } from '../abstract/entity';

import { DateUtil } from '../../util/date';

import { OfertaDisciplina } from '../oferta-disciplina/entity';

export class Aula extends AbstractEntity {
	inicio!: Date;
	termino!: Date;
	ofertaDisciplina!: OfertaDisciplina;

	toString(): string {
		return this.ofertaDisciplina.toString() + " - " + DateUtil.getStaticStringFromDatetime(this.inicio)
			+ "-" + DateUtil.getStaticStringFromDatetime(this.termino);
	}
}
