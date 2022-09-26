import { AbstractEntity } from '../abstract/entity';

import { OfertaCurso } from '../oferta-curso/entity';

export class User extends AbstractEntity {
	username!: string;
	password!: string;

	toString(): string {
		return this.username;
	}
}
