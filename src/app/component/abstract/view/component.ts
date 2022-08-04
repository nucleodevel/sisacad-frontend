import { Router, ActivatedRoute } from '@angular/router';

import { AbstractComponent } from '../abstract/component';

import { AbstractEntity } from '../../../domain/abstract/entity';
import { AbstractDto } from '../../../dto/abstract/dto';
import { AbstractService } from '../../../service/abstract/service';

export abstract class AbstractViewComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>>
	extends AbstractComponent<E, DTO, S> {

	id!: number;
	entity!: E;

	constructor(service: S, route: ActivatedRoute, routerPrefix: string) {
		super(service, route, routerPrefix);
	}

	ngOnInitSuper() {
		this.id = this.route.snapshot.params['id'];

		this.service.findById(this.id).subscribe(data => {
			console.log(data);
			this.entity = this.service.makeEntityFromDto(data);
		}, error => {
			this.setErrorMessage(error);
		});
	}
}