import { ActivatedRoute } from '@angular/router';

import { AbstractComponent } from '../abstract/component';

import { AbstractEntity } from '../../../domain/abstract/entity';
import { AbstractDto } from '../../../dto/abstract/dto';
import { AbstractService } from '../../../service/abstract/service';

export abstract class AbstractAddComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>>
	extends AbstractComponent<E, DTO, S> {

	/*
	 * Attributes
	 */

	entity!: E;

	/*
	 * Constructors
	 */

	constructor(service: S, route: ActivatedRoute, routerPrefix: string) {
		super(service, route, routerPrefix);
	}

	/*
	 * Component methods
	 */

	abstract ngOnInitSuperAdditional(): void;

	ngOnInitSuper() {
		this.entity = this.service.newEntityInstance();
		this.ngOnInitSuperAdditional();
	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.insert(dto).subscribe(result => {
			this.setResultMessage("SUCCESS", "Criado com sucesso");
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}
	
	closeResultMessage() {
		var redirectToList = this.resultStatus == 'SUCCESS';
		
		this.resultStatus = "";
		this.resultMessage = "";
		
		if (redirectToList) {
			this.list();
		}
	}

}