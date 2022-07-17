import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { EstruturaCurricular } from '../../entity/entity';
import { EstruturaCurricularDto } from '../../dto/dto';
import { EstruturaCurricularService } from '../../service/service';

import { Curso } from '../../../curso/entity/entity';
import { CursoService } from '../../../curso/service/service';

@Component({
  selector: 'app-estrutura-curricular-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class EstruturaCurricularEditComponent extends AbstractEditComponent<EstruturaCurricular, EstruturaCurricularDto, EstruturaCurricularService> implements OnInit {
	
  listaCurso!: Curso[];

  constructor(protected service: EstruturaCurricularService, protected router: Router, 
      protected route: ActivatedRoute, protected cursoService: CursoService) {
	super(service, router, route, 'estrutura-curricular');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.cursoService.findAll().subscribe(data => {
	  this.listaCurso = this.cursoService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareCurso(o1: Curso, o2: Curso) {
	return o1.compare(o2);
  }

}