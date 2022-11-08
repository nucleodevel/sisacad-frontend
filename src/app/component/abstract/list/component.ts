import { ActivatedRoute } from '@angular/router';

import { AbstractComponent } from '../abstract/component';

import { AbstractEntity } from '../../../domain/abstract/entity';
import { AbstractDto } from '../../../dto/abstract/dto';
import { AbstractService } from '../../../service/abstract/service';

export abstract class AbstractListComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>>
	extends AbstractComponent<E, DTO, S> {

	/*
	 * Attributes
	 */

	entities!: E[];

	/*
	 * Constructors
	 */

	constructor(service: S, routerPrefix: string) {
		super(service, {} as ActivatedRoute, routerPrefix);
	}

	/*
	 * Component methods
	 */

	abstract ngOnInitSuperAdditional(): void;

	ngOnInitSuper() {
		this.reloadData();
		this.ngOnInitSuperAdditional();
	}

	protected remove(id: number) {
		this.service.delete(id).subscribe(data => {
			this.reloadData();
			this.setResultMessage("SUCCESS", "Removido com sucesso");
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	askRemove(entity: E) {
		if (confirm('Remover "' + entity.toString() + '"?')) {
			this.remove(entity.id);
		}
	}

	/*
	 * Auxiliares
	 */

	reloadData() {
		this.service.findAll().subscribe(data => {
			this.entities = this.service.makeEntityArrayFromDtoArray(data);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

}