import { AbstractEntity } from '../abstract/entity';

export class Usuario extends AbstractEntity {
	username!: string;
	password!: string;
	nome!: string;
	roles!: string;

	toString(): string {
		return this.username;
	}

	getListRole(): string[] {
		return this.roles.split(',');
	}
}
