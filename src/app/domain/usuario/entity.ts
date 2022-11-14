import { AbstractEntity } from '../abstract/entity';

export class Usuario extends AbstractEntity {
	lastAccess!: number;
	username!: string;
	password!: string;
	nome!: string;
	email!: string;
	roles!: string;

	toString(): string {
		return this.username;
	}

	getListRole(): string[] {
		return this.roles.split(',');
	}
}
