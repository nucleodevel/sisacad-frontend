import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/component';

import { AulaListComponent } from './component/aula/list/component';
import { AulaViewComponent } from './component/aula/view/component';
import { AulaAddComponent } from './component/aula/add/component';
import { AulaEditComponent } from './component/aula/edit/component';

import { AvaliacaoListComponent } from './component/avaliacao/list/component';
import { AvaliacaoViewComponent } from './component/avaliacao/view/component';
import { AvaliacaoAddComponent } from './component/avaliacao/add/component';
import { AvaliacaoEditComponent } from './component/avaliacao/edit/component';

import { AvaliacaoVestibulandoListComponent } from './component/avaliacao-vestibulando/list/component';
import { AvaliacaoVestibulandoViewComponent } from './component/avaliacao-vestibulando/view/component';
import { AvaliacaoVestibulandoAddComponent } from './component/avaliacao-vestibulando/add/component';
import { AvaliacaoVestibulandoEditComponent } from './component/avaliacao-vestibulando/edit/component';

import { CursoListComponent } from './component/curso/list/component';
import { CursoViewComponent } from './component/curso/view/component';
import { CursoAddComponent } from './component/curso/add/component';
import { CursoEditComponent } from './component/curso/edit/component';

import { DiscenteListComponent } from './component/discente/list/component';
import { DiscenteViewComponent } from './component/discente/view/component';
import { DiscenteAddComponent } from './component/discente/add/component';
import { DiscenteEditComponent } from './component/discente/edit/component';

import { DisciplinaListComponent } from './component/disciplina/list/component';
import { DisciplinaViewComponent } from './component/disciplina/view/component';
import { DisciplinaAddComponent } from './component/disciplina/add/component';
import { DisciplinaEditComponent } from './component/disciplina/edit/component';

import { DocenteListComponent } from './component/docente/list/component';
import { DocenteViewComponent } from './component/docente/view/component';
import { DocenteAddComponent } from './component/docente/add/component';
import { DocenteEditComponent } from './component/docente/edit/component';

import { EstruturaCurricularListComponent } from './component/estrutura-curricular/list/component';
import { EstruturaCurricularViewComponent } from './component/estrutura-curricular/view/component';
import { EstruturaCurricularAddComponent } from './component/estrutura-curricular/add/component';
import { EstruturaCurricularEditComponent } from './component/estrutura-curricular/edit/component';

import { OfertaCursoListComponent } from './component/oferta-curso/list/component';
import { OfertaCursoViewComponent } from './component/oferta-curso/view/component';
import { OfertaCursoAddComponent } from './component/oferta-curso/add/component';
import { OfertaCursoEditComponent } from './component/oferta-curso/edit/component';

import { OfertaDisciplinaListComponent } from './component/oferta-disciplina/list/component';
import { OfertaDisciplinaViewComponent } from './component/oferta-disciplina/view/component';
import { OfertaDisciplinaAddComponent } from './component/oferta-disciplina/add/component';
import { OfertaDisciplinaEditComponent } from './component/oferta-disciplina/edit/component';

import { ParticipacaoAulaListComponent } from './component/participacao-aula/list/component';
import { ParticipacaoAulaViewComponent } from './component/participacao-aula/view/component';
import { ParticipacaoAulaAddComponent } from './component/participacao-aula/add/component';
import { ParticipacaoAulaEditComponent } from './component/participacao-aula/edit/component';

import { ParticipacaoAvaliacaoListComponent } from './component/participacao-avaliacao/list/component';
import { ParticipacaoAvaliacaoViewComponent } from './component/participacao-avaliacao/view/component';
import { ParticipacaoAvaliacaoAddComponent } from './component/participacao-avaliacao/add/component';
import { ParticipacaoAvaliacaoEditComponent } from './component/participacao-avaliacao/edit/component';

import { TurmaListComponent } from './component/turma/list/component';
import { TurmaViewComponent } from './component/turma/view/component';
import { TurmaAddComponent } from './component/turma/add/component';
import { TurmaEditComponent } from './component/turma/edit/component';

import { VestibulandoListComponent } from './component/vestibulando/list/component';
import { VestibulandoViewComponent } from './component/vestibulando/view/component';
import { VestibulandoAddComponent } from './component/vestibulando/add/component';
import { VestibulandoEditComponent } from './component/vestibulando/edit/component';

import { VestibularListComponent } from './component/vestibular/list/component';
import { VestibularViewComponent } from './component/vestibular/view/component';
import { VestibularAddComponent } from './component/vestibular/add/component';
import { VestibularEditComponent } from './component/vestibular/edit/component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },	
	
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

  { path: 'participacao-aula', component: ParticipacaoAulaListComponent },
  { path: 'participacao-aula/list', component: ParticipacaoAulaListComponent },
  { path: 'participacao-aula/view/:id', component: ParticipacaoAulaViewComponent },
  { path: 'participacao-aula/add', component: ParticipacaoAulaAddComponent },
  { path: 'participacao-aula/edit/:id', component: ParticipacaoAulaEditComponent },

  { path: 'participacao-avaliacao', component: ParticipacaoAvaliacaoListComponent },
  { path: 'participacao-avaliacao/list', component: ParticipacaoAvaliacaoListComponent },
  { path: 'participacao-avaliacao/view/:id', component: ParticipacaoAvaliacaoViewComponent },
  { path: 'participacao-avaliacao/add', component: ParticipacaoAvaliacaoAddComponent },
  { path: 'participacao-avaliacao/edit/:id', component: ParticipacaoAvaliacaoEditComponent },

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
