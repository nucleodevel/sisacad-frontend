import { ActivatedRoute } from '@angular/router';

import { AbstractComponent } from '../abstract/component';

import { AbstractEntity } from '../../../domain/abstract/entity';
import { AbstractDto } from '../../../dto/abstract/dto';
import { AbstractService } from '../../../service/abstract/service';

export abstract class AbstractEditComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>>
	extends AbstractComponent<E, DTO, S> {

	/*
	 * Attributes
	 */

	id!: number;
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

	abstract ngOnInitSuperAdditional(dto: DTO): void;

	ngOnInitSuper() {
		this.id = this.route.snapshot.params['id'];

		this.service.findById(this.id).subscribe(dto => {
			this.entity = this.service.makeEntityFromDto(dto);
			this.ngOnInitSuperAdditional(dto);
		}, error => {
			this.setResultMessage("FAILURE", error);
		});
	}

	onSubmit() {
		var dto = this.service.newDtoInstance();
		dto.copyFromEntity(this.entity);
		this.service.update(this.id, dto).subscribe(result => {
			this.setResultMessage("SUCCESS", "Editado com sucesso");
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