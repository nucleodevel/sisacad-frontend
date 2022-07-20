import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractAddComponent } from '../../../abstract/component/add/component';

import { ParticipacaoAvaliacao } from '../../entity/entity';
import { ParticipacaoAvaliacaoDto } from '../../dto/dto';
import { ParticipacaoAvaliacaoService } from '../../service/service';

import { Avaliacao } from '../../../avaliacao/entity/entity';
import { AvaliacaoService } from '../../../avaliacao/service/service';

import { Discente } from '../../../discente/entity/entity';
import { DiscenteService } from '../../../discente/service/service';

@Component({
  selector: 'app-participacao-avaliacao-add',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ParticipacaoAvaliacaoAddComponent extends AbstractAddComponent<ParticipacaoAvaliacao, ParticipacaoAvaliacaoDto, ParticipacaoAvaliacaoService> implements OnInit {
	
  listaAvaliacao!: Avaliacao[];
  listaDiscente!: Discente[];

  constructor(protected service: ParticipacaoAvaliacaoService, protected router: Router, 
      protected route: ActivatedRoute, protected avaliacaoService: AvaliacaoService, protected discenteService: DiscenteService) {
	super(service, router, route, 'participacao-avaliacao');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.avaliacaoService.findAll().subscribe(data => {
	  this.listaAvaliacao = this.avaliacaoService.makeEntityArrayFromDtoArray(data);
    });
	
	this.discenteService.findAll().subscribe(data => {
	  this.listaDiscente = this.discenteService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareAvaliacao(o1: Avaliacao, o2: Avaliacao) {
	return o1.compare(o2);
  }

  compareDiscente(o1: Discente, o2: Discente) {
	return o1.compare(o2);
  }

}