import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../../app.config';

@Injectable({
	providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

	protected apiKey: string = AppConfig.API_KEY;
	protected apiSecret: string = AppConfig.API_SECRET;

	constructor() {

	}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		if (!req.headers.get("skip")) {
			if (this.apiKey && this.apiSecret) {

				let basicauth = 'Basic ' + btoa(this.apiKey + ':' + this.apiSecret);
				req = req.clone({
					setHeaders: { Authorization: basicauth }
				});
			}
		}

		return next.handle(req);

	}
}