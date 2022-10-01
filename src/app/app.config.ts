import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class AppConfig {

	public static API_ENDPOINT = "http://localhost:8080/";

	public static API_KEY = "frontend.key";
	public static API_SECRET = "frontend.secret";

}