import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AulaListComponent } from './domain/aula/component/list/component';
import { AulaViewComponent } from './domain/aula/component/view/component';
import { AulaAddComponent } from './domain/aula/component/add/component';
import { AulaEditComponent } from './domain/aula/component/edit/component';

import { AvaliacaoListComponent } from './domain/avaliacao/component/list/component';
import { AvaliacaoViewComponent } from './domain/avaliacao/component/view/component';
import { AvaliacaoAddComponent } from './domain/avaliacao/component/add/component';
import { AvaliacaoEditComponent } from './domain/avaliacao/component/edit/component';

import { AvaliacaoVestibulandoListComponent } from './domain/avaliacao-vestibulando/component/list/component';
import { AvaliacaoVestibulandoViewComponent } from './domain/avaliacao-vestibulando/component/view/component';
import { AvaliacaoVestibulandoAddComponent } from './domain/avaliacao-vestibulando/component/add/component';
import { AvaliacaoVestibulandoEditComponent } from './domain/avaliacao-vestibulando/component/edit/component';

import { CursoListComponent } from './domain/curso/component/list/component';
import { CursoViewComponent } from './domain/curso/component/view/component';
import { CursoAddComponent } from './domain/curso/component/add/component';
import { CursoEditComponent } from './domain/curso/component/edit/component';

import { DiscenteListComponent } from './domain/discente/component/list/component';
import { DiscenteViewComponent } from './domain/discente/component/view/component';
import { DiscenteAddComponent } from './domain/discente/component/add/component';
import { DiscenteEditComponent } from './domain/discente/component/edit/component';

import { DisciplinaListComponent } from './domain/disciplina/component/list/component';
import { DisciplinaViewComponent } from './domain/disciplina/component/view/component';
import { DisciplinaAddComponent } from './domain/disciplina/component/add/component';
import { DisciplinaEditComponent } from './domain/disciplina/component/edit/component';

import { DocenteListComponent } from './domain/docente/component/list/component';
import { DocenteViewComponent } from './domain/docente/component/view/component';
import { DocenteAddComponent } from './domain/docente/component/add/component';
import { DocenteEditComponent } from './domain/docente/component/edit/component';

import { EstruturaCurricularListComponent } from './domain/estrutura-curricular/component/list/component';
import { EstruturaCurricularViewComponent } from './domain/estrutura-curricular/component/view/component';
import { EstruturaCurricularAddComponent } from './domain/estrutura-curricular/component/add/component';
import { EstruturaCurricularEditComponent } from './domain/estrutura-curricular/component/edit/component';

import { OfertaCursoListComponent } from './domain/oferta-curso/component/list/component';
import { OfertaCursoViewComponent } from './domain/oferta-curso/component/view/component';
import { OfertaCursoAddComponent } from './domain/oferta-curso/component/add/component';
import { OfertaCursoEditComponent } from './domain/oferta-curso/component/edit/component';

import { OfertaDisciplinaListComponent } from './domain/oferta-disciplina/component/list/component';
import { OfertaDisciplinaViewComponent } from './domain/oferta-disciplina/component/view/component';
import { OfertaDisciplinaAddComponent } from './domain/oferta-disciplina/component/add/component';
import { OfertaDisciplinaEditComponent } from './domain/oferta-disciplina/component/edit/component';

import { TurmaListComponent } from './domain/turma/component/list/component';
import { TurmaViewComponent } from './domain/turma/component/view/component';
import { TurmaAddComponent } from './domain/turma/component/add/component';
import { TurmaEditComponent } from './domain/turma/component/edit/component';

import { VestibulandoListComponent } from './domain/vestibulando/component/list/component';
import { VestibulandoViewComponent } from './domain/vestibulando/component/view/component';
import { VestibulandoAddComponent } from './domain/vestibulando/component/add/component';
import { VestibulandoEditComponent } from './domain/vestibulando/component/edit/component';

import { VestibularListComponent } from './domain/vestibular/component/list/component';
import { VestibularViewComponent } from './domain/vestibular/component/view/component';
import { VestibularAddComponent } from './domain/vestibular/component/add/component';
import { VestibularEditComponent } from './domain/vestibular/component/edit/component';

const routes: Routes = [
  { path: 'aula', component: AulaListComponent },
  { path: 'aula/list', component: AulaListComponent },
  { path: 'aula/view/:id', component: AulaViewComponent },
  { path: 'aula/add', component: AulaAddComponent },
  { path: 'aula/edit/:id', component: AulaEditComponent },

  { path: 'avaliacao', component: AvaliacaoListComponent },
  { path: 'avaliacao/list', component: AvaliacaoListComponent },
  { path: 'avaliacao/view/:id', component: AvaliacaoViewComponent },
  { path: 'avaliacao/add', component: AvaliacaoAddComponent },
  { path: 'avaliacao/edit/:id', component: AvaliacaoEditComponent },

  { path: 'avaliacao-vestibulando', component: AvaliacaoVestibulandoListComponent },
  { path: 'avaliacao-vestibulando/list', component: AvaliacaoVestibulandoListComponent },
  { path: 'avaliacao-vestibulando/view/:id', component: AvaliacaoVestibulandoViewComponent },
  { path: 'avaliacao-vestibulando/add', component: AvaliacaoVestibulandoAddComponent },
  { path: 'avaliacao-vestibulando/edit/:id', component: AvaliacaoVestibulandoEditComponent },

  { path: 'curso', component: CursoListComponent },
  { path: 'curso/list', component: CursoListComponent },
  { path: 'curso/view/:id', component: CursoViewComponent },
  { path: 'curso/add', component: CursoAddComponent },
  { path: 'curso/edit/:id', component: CursoEditComponent },

  { path: 'discente', component: DiscenteListComponent },
  { path: 'discente/list', component: DiscenteListComponent },
  { path: 'discente/view/:id', component: DiscenteViewComponent },
  { path: 'discente/add', component: DiscenteAddComponent },
  { path: 'discente/edit/:id', component: DiscenteEditComponent },

  { path: 'disciplina', component: DisciplinaListComponent },
  { path: 'disciplina/list', component: DisciplinaListComponent },
  { path: 'disciplina/view/:id', component: DisciplinaViewComponent },
  { path: 'disciplina/add', component: DisciplinaAddComponent },
  { path: 'disciplina/edit/:id', component: DisciplinaEditComponent },

  { path: 'docente', component: DocenteListComponent },
  { path: 'docente/list', component: DocenteListComponent },
  { path: 'docente/view/:id', component: DocenteViewComponent },
  { path: 'docente/add', component: DocenteAddComponent },
  { path: 'docente/edit/:id', component: DocenteEditComponent },

  { path: 'estrutura-curricular', component: EstruturaCurricularListComponent },
  { path: 'estrutura-curricular/list', component: EstruturaCurricularListComponent },
  { path: 'estrutura-curricular/view/:id', component: EstruturaCurricularViewComponent },
  { path: 'estrutura-curricular/add', component: EstruturaCurricularAddComponent },
  { path: 'estrutura-curricular/edit/:id', component: EstruturaCurricularEditComponent },

  { path: 'oferta-curso', component: OfertaCursoListComponent },
  { path: 'oferta-curso/list', component: OfertaCursoListComponent },
  { path: 'oferta-curso/view/:id', component: OfertaCursoViewComponent },
  { path: 'oferta-curso/add', component: OfertaCursoAddComponent },
  { path: 'oferta-curso/edit/:id', component: OfertaCursoEditComponent },

  { path: 'oferta-disciplina', component: OfertaDisciplinaListComponent },
  { path: 'oferta-disciplina/list', component: OfertaDisciplinaListComponent },
  { path: 'oferta-disciplina/view/:id', component: OfertaDisciplinaViewComponent },
  { path: 'oferta-disciplina/add', component: OfertaDisciplinaAddComponent },
  { path: 'oferta-disciplina/edit/:id', component: OfertaDisciplinaEditComponent },

  { path: 'turma', component: TurmaListComponent },
  { path: 'turma/list', component: TurmaListComponent },
  { path: 'turma/view/:id', component: TurmaViewComponent },
  { path: 'turma/add', component: TurmaAddComponent },
  { path: 'turma/edit/:id', component: TurmaEditComponent },

  { path: 'vestibulando', component: VestibulandoListComponent },
  { path: 'vestibulando/list', component: VestibulandoListComponent },
  { path: 'vestibulando/view/:id', component: VestibulandoViewComponent },
  { path: 'vestibulando/add', component: VestibulandoAddComponent },
  { path: 'vestibulando/edit/:id', component: VestibulandoEditComponent },

  { path: 'vestibular', component: VestibularListComponent },
  { path: 'vestibular/list', component: VestibularListComponent },
  { path: 'vestibular/view/:id', component: VestibularViewComponent },
  { path: 'vestibular/add', component: VestibularAddComponent },
  { path: 'vestibular/edit/:id', component: VestibularEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
