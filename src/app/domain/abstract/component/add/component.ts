import { ActivatedRoute, Router } from '@angular/router';

import { AbstractComponent } from '../abstract/component';

import { AbstractEntity } from '../../entity/entity';
import { AbstractDto } from '../../dto/dto';
import { AbstractService } from '../../service/service';

export abstract class AbstractAddComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>>
	extends AbstractComponent<E, DTO, S> {

	entity!: E;

	constructor(service: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
		super(service, router, route, routerPrefix);
	}

	ngOnInitSuper() {
		this.entity = this.service.newEntityInstance();
	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.insert(dto).subscribe(result => {
			this.list();
		}, error => {
			this.setErrorMessage(error);
		});
	}

}