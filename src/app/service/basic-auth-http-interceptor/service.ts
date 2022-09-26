import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

	constructor() {

	}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		if (localStorage.getItem('username') && localStorage.getItem('basicauth')) {

			console.log(req.headers);
			var basicauth = localStorage.getItem('basicauth');
			if (basicauth != null) {
				req = req.clone({
					setHeaders: { Authorization: basicauth }
				});
			}
		}

		return next.handle(req);

	}
}