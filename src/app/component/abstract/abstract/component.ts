import { ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppInjector } from '../../../app.module';

import { DateUtil } from '../../../util/date';

import { AbstractEntity } from '../../../domain/abstract/entity';
import { AbstractDto } from '../../../dto/abstract/dto';
import { AbstractService } from '../../../service/abstract/service';

export abstract class AbstractComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>> {

	protected _router!: Router;
	private _dateUtil!: DateUtil;

	errorMessage: string = "";

	constructor(protected service: S, protected route: ActivatedRoute, public routerPrefix: string) {

	}

	get router(): Router {
		if (!this._router) {
			this._router = AppInjector.get(Router);
		}
		return this._router;
	}

	get dateUtil(): DateUtil {
		if (!this._dateUtil) {
			this._dateUtil = AppInjector.get(DateUtil);
		}
		return this._dateUtil;
	}

	abstract ngOnInitSuper(): void;
	
	ngAfterViewInitSuper(loader: ElementRef, bodyCard: ElementRef) {
		this.hideloader(loader, bodyCard);
	}

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
	}

	list() {
		this.router.navigate(['/' + this.routerPrefix + '/list']);
	}

	async hideloader(loader: ElementRef, bodyCard: ElementRef) {
		await this.delay(500);
		loader.nativeElement.style.display = 'none';
		bodyCard.nativeElement.style.display = 'block';
	}

	async hideloaderAndDelay(loader: ElementRef, bodyCard: ElementRef, delay: number) {
		await this.delay(delay);
		loader.nativeElement.style.display = 'none';
		bodyCard.nativeElement.style.display = 'block';
	}

	delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

}