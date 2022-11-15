import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/container/home/component';
import { LoginComponent } from './component/authentication/login/component';
import { LogoutComponent } from './component/authentication/logout/component';
import { UserComponent } from './component/authentication/user/component';

import { AuthGuardService } from './service/authguard/service';

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
import { VestibulandoEditComponent } from './component/vestibulando/edit/component';

import { VestibulandoUsuarioAddComponent } from './component/vestibulando-usuario/add/component';

import { VestibularListComponent } from './component/vestibular/list/component';
import { VestibularViewComponent } from './component/vestibular/view/component';
import { VestibularAddComponent } from './component/vestibular/add/component';
import { VestibularEditComponent } from './component/vestibular/edit/component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
	{ path: 'user', component: UserComponent, canActivate: [AuthGuardService] },

	{ path: 'aula', component: AulaListComponent, canActivate: [AuthGuardService] },
	{ path: 'aula/list', component: AulaListComponent, canActivate: [AuthGuardService] },
	{ path: 'aula/view/:id', component: AulaViewComponent, canActivate: [AuthGuardService] },
	{ path: 'aula/add', component: AulaAddComponent, canActivate: [AuthGuardService] },
	{ path: 'aula/edit/:id', component: AulaEditComponent, canActivate: [AuthGuardService] },

	{ path: 'avaliacao', component: AvaliacaoListComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao/list', component: AvaliacaoListComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao/view/:id', component: AvaliacaoViewComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao/add', component: AvaliacaoAddComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao/edit/:id', component: AvaliacaoEditComponent, canActivate: [AuthGuardService] },

	{ path: 'avaliacao-vestibulando', component: AvaliacaoVestibulandoListComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao-vestibulando/list', component: AvaliacaoVestibulandoListComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao-vestibulando/view/:id', component: AvaliacaoVestibulandoViewComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao-vestibulando/add', component: AvaliacaoVestibulandoAddComponent, canActivate: [AuthGuardService] },
	{ path: 'avaliacao-vestibulando/edit/:id', component: AvaliacaoVestibulandoEditComponent, canActivate: [AuthGuardService] },

	{ path: 'curso', component: CursoListComponent, canActivate: [AuthGuardService] },
	{ path: 'curso/list', component: CursoListComponent, canActivate: [AuthGuardService] },
	{ path: 'curso/view/:id', component: CursoViewComponent, canActivate: [AuthGuardService] },
	{ path: 'curso/add', component: CursoAddComponent, canActivate: [AuthGuardService] },
	{ path: 'curso/edit/:id', component: CursoEditComponent, canActivate: [AuthGuardService] },

	{ path: 'discente', component: DiscenteListComponent, canActivate: [AuthGuardService] },
	{ path: 'discente/list', component: DiscenteListComponent, canActivate: [AuthGuardService] },
	{ path: 'discente/view/:id', component: DiscenteViewComponent, canActivate: [AuthGuardService] },
	{ path: 'discente/add', component: DiscenteAddComponent, canActivate: [AuthGuardService] },
	{ path: 'discente/edit/:id', component: DiscenteEditComponent, canActivate: [AuthGuardService] },

	{ path: 'disciplina', component: DisciplinaListComponent, canActivate: [AuthGuardService] },
	{ path: 'disciplina/list', component: DisciplinaListComponent, canActivate: [AuthGuardService] },
	{ path: 'disciplina/view/:id', component: DisciplinaViewComponent, canActivate: [AuthGuardService] },
	{ path: 'disciplina/add', component: DisciplinaAddComponent, canActivate: [AuthGuardService] },
	{ path: 'disciplina/edit/:id', component: DisciplinaEditComponent, canActivate: [AuthGuardService] },

	{ path: 'docente', component: DocenteListComponent, canActivate: [AuthGuardService] },
	{ path: 'docente/list', component: DocenteListComponent, canActivate: [AuthGuardService] },
	{ path: 'docente/view/:id', component: DocenteViewComponent, canActivate: [AuthGuardService] },
	{ path: 'docente/add', component: DocenteAddComponent, canActivate: [AuthGuardService] },
	{ path: 'docente/edit/:id', component: DocenteEditComponent, canActivate: [AuthGuardService] },

	{ path: 'estrutura-curricular', component: EstruturaCurricularListComponent, canActivate: [AuthGuardService] },
	{ path: 'estrutura-curricular/list', component: EstruturaCurricularListComponent, canActivate: [AuthGuardService] },
	{ path: 'estrutura-curricular/view/:id', component: EstruturaCurricularViewComponent, canActivate: [AuthGuardService] },
	{ path: 'estrutura-curricular/add', component: EstruturaCurricularAddComponent, canActivate: [AuthGuardService] },
	{ path: 'estrutura-curricular/edit/:id', component: EstruturaCurricularEditComponent, canActivate: [AuthGuardService] },

	{ path: 'oferta-curso', component: OfertaCursoListComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-curso/list', component: OfertaCursoListComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-curso/view/:id', component: OfertaCursoViewComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-curso/add', component: OfertaCursoAddComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-curso/edit/:id', component: OfertaCursoEditComponent, canActivate: [AuthGuardService] },

	{ path: 'oferta-disciplina', component: OfertaDisciplinaListComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-disciplina/list', component: OfertaDisciplinaListComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-disciplina/view/:id', component: OfertaDisciplinaViewComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-disciplina/add', component: OfertaDisciplinaAddComponent, canActivate: [AuthGuardService] },
	{ path: 'oferta-disciplina/edit/:id', component: OfertaDisciplinaEditComponent, canActivate: [AuthGuardService] },

	{ path: 'participacao-aula', component: ParticipacaoAulaListComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-aula/list', component: ParticipacaoAulaListComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-aula/view/:id', component: ParticipacaoAulaViewComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-aula/add', component: ParticipacaoAulaAddComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-aula/edit/:id', component: ParticipacaoAulaEditComponent, canActivate: [AuthGuardService] },

	{ path: 'participacao-avaliacao', component: ParticipacaoAvaliacaoListComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-avaliacao/list', component: ParticipacaoAvaliacaoListComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-avaliacao/view/:id', component: ParticipacaoAvaliacaoViewComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-avaliacao/add', component: ParticipacaoAvaliacaoAddComponent, canActivate: [AuthGuardService] },
	{ path: 'participacao-avaliacao/edit/:id', component: ParticipacaoAvaliacaoEditComponent, canActivate: [AuthGuardService] },

	{ path: 'turma', component: TurmaListComponent, canActivate: [AuthGuardService] },
	{ path: 'turma/list', component: TurmaListComponent, canActivate: [AuthGuardService] },
	{ path: 'turma/view/:id', component: TurmaViewComponent, canActivate: [AuthGuardService] },
	{ path: 'turma/add', component: TurmaAddComponent, canActivate: [AuthGuardService] },
	{ path: 'turma/edit/:id', component: TurmaEditComponent, canActivate: [AuthGuardService] },

	{ path: 'vestibulando', component: VestibulandoListComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibulando/list', component: VestibulandoListComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibulando/view/:id', component: VestibulandoViewComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibulando/edit/:id', component: VestibulandoEditComponent, canActivate: [AuthGuardService] },

	{ path: 'vestibulando-usuario/add', component: VestibulandoUsuarioAddComponent },

	{ path: 'vestibular', component: VestibularListComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibular/list', component: VestibularListComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibular/view/:id', component: VestibularViewComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibular/add', component: VestibularAddComponent, canActivate: [AuthGuardService] },
	{ path: 'vestibular/edit/:id', component: VestibularEditComponent, canActivate: [AuthGuardService] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
