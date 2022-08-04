import { ActivatedRoute, Router } from '@angular/router';
import { AppInjector } from '../../../app.module';

import { DateUtil } from '../../../util/date';

import { AbstractEntity } from '../../../domain/abstract/entity';
import { AbstractDto } from '../../../dto/abstract/dto';
import { AbstractService } from '../../../service/abstract/service';

export abstract class AbstractComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>> {

	protected service: S;
	protected router: Router;
	protected route: ActivatedRoute;
	
	private _dateUtil!: DateUtil;

	routerPrefix: string;

	loading: boolean = false;
	errorMessage: string = "";

	constructor(service: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
		this.service = service;
		this.router = router;
		this.route = route;
		this.routerPrefix = routerPrefix;
	}

	get dateUtil(): DateUtil {
		if (!this._dateUtil) {
			this._dateUtil = AppInjector.get(DateUtil);
		}
		return this._dateUtil;
	}

	abstract ngOnInitSuper(): void;

	setErrorMessage(error: any) {
		if (error == null) {
			this.errorMessage = "";
			return;
		}
		
		var errorMessage: string = JSON.stringify(error);
		if (error.hasOwnProperty('error')) {
			if (error.error.hasOwnProperty('msg')) {
				errorMessage = JSON.stringify(error.error.msg);
			}
		}

		if (error.hasOwnProperty('message')) {
			if (error.message.includes('0 Unknown Error')) {
				errorMessage = "Problema na comunicação com o servidor!";
			}
		}

		console.error(JSON.stringify(errorMessage));

		this.errorMessage = errorMessage;
		this.loading = false;
	}

	list() {
		this.router.navigate(['/' + this.routerPrefix + '/list']);
	}

}