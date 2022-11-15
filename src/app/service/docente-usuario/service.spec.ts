import { TestBed } from '@angular/core/testing';

import { DocenteUsuarioService } from './service';

describe('DocenteUsuarioService', () => {
	let service: DocenteUsuarioService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DocenteUsuarioService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
