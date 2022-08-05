import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from '../abstract/service';

import { Vestibulando } from '../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../dto/vestibulando/dto';

import { OfertaCursoService } from '../../service/oferta-curso/service';

@Injectable()
export class VestibulandoService extends AbstractService<Vestibulando, VestibulandoDto> {

	private static readonly apiUrl = 'http://localhost:8080/';
	private static readonly apiPath = 'vestibulando';

	constructor(protected httpClient: HttpClient, protected ofertaCursoService: OfertaCursoService) {
		super(httpClient, VestibulandoService.apiUrl + VestibulandoService.apiPath);
	}

	newEntityInstance(): Vestibulando {
		return new Vestibulando();
	}

	newDtoInstance(): VestibulandoDto {
		return new VestibulandoDto();
	}

	makeEntityFromDto(dto: VestibulandoDto): Vestibulando {
		var entity = this.newEntityInstance();

		entity.id = dto.id;
		entity.cpf = dto.cpf;
		entity.nome = dto.nome;

		this.ofertaCursoService.findById(dto.ofertaCurso).subscribe(data => {
			console.log(data);
			entity.ofertaCurso = this.ofertaCursoService.makeEntityFromDto(data);
		});

		return entity;
	}
}