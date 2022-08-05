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
	
	abstract ngOnInitSuperAdditional(dto: DTO): void;

	ngOnInitSuper() {
		this.id = this.route.snapshot.params['id'];

		this.service.findById(this.id).subscribe(dto => {
			this.ngOnInitSuperAdditional(dto);			
			this.entity = this.service.makeEntityFromDto(dto);
		}, error => {
			this.setErrorMessage(error);
		});
	}
}