import { Router, ActivatedRoute } from '@angular/router';

import { AbstractComponent } from '../abstract/component';

import { AbstractEntity } from '../../entity/entity';
import { AbstractDto } from '../../dto/dto';
import { AbstractService } from '../../service/service';

export abstract class AbstractViewComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>>
	extends AbstractComponent<E, DTO, S> {

	id!: number;
	entity!: E;

	constructor(service: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
		super(service, router, route, routerPrefix);
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