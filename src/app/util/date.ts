import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class DateUtil {

	constructor() {

	}

	getStringFromDate(item: Date): string {
		return DateUtil.getStaticStringFromDate(item);
	}

	getDateFromString(item: string): Date {
		return DateUtil.getStaticDateFromString(item);
	}

	getStringFromDatetime(item: Date): string {
		return DateUtil.getStaticStringFromDatetime(item);
	}

	getDatetimeFromString(item: string): Date {
		return DateUtil.getStaticDatetimeFromString(item);
	}

	static getStaticStringFromDate(item: Date): string {
		return item.getFullYear()
			+ '-' + String(item.getMonth() + 1).padStart(2, '0')
			+ '-' + String(item.getDate()).padStart(2, '0');
	}

	static getStaticDateFromString(item: string): Date {
		var parts = item.split("-");
		return new Date(Number(+parts[0]), Number(parts[1]) - 1, Number(+parts[2]));
	}

	static getStaticStringFromDatetime(item: Date): string {
		return item.getFullYear()
			+ '-' + String(item.getMonth() + 1).padStart(2, '0')
			+ '-' + String(item.getDate()).padStart(2, '0')
			+ ' ' + String(item.getHours()).padStart(2, '0')
			+ ':' + String(item.getMinutes()).padStart(2, '0')
			+ ':' + String(item.getSeconds()).padStart(2, '0');
	}

	static getStaticDatetimeFromString(item: string): Date {
		var parts = item.includes("T") ? item.split("T") : item.split(" ");

		var dateParts = parts[0].split("-");
		var timeParts = parts[1].split(":");

		var date = new Date(
			Number(+dateParts[0]), Number(dateParts[1]) - 1, Number(+dateParts[2]),
			Number(timeParts[0]), Number(timeParts[1]), timeParts.length == 3 ? Number(timeParts[2]) : 0
		);

		return date;
	}
}