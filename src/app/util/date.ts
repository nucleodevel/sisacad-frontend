import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class DateUtil {
	
	constructor() {
		
	}

	getStringFromDate(item: Date): string {
		return item.getFullYear()
			+ '-' + String(item.getMonth() + 1).padStart(2, '0')
			+ '-' + String(item.getDate()).padStart(2, '0');
	}

	getDateFromString(item: string): Date {
		var parts = item.split("-");
		return new Date(Number(+parts[0]), Number(parts[1]) - 1, Number(+parts[2]));
	}
}