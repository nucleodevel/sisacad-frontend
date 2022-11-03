import { TestBed } from '@angular/core/testing';

import { VestibulandoUsuarioService } from './service';

describe('VestibulandoUsuarioService', () => {
	let service: VestibulandoUsuarioService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(VestibulandoUsuarioService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
