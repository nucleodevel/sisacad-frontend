import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './component/container/nav/component';

import { HomeComponent } from './component/container/home/component';
import { LoginComponent } from './component/authentication/login/component';
import { LogoutComponent } from './component/authentication/logout/component';
import { UserComponent } from './component/authentication/user/component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-http-interceptor/service';

import { AulaListComponent } from './component/aula/list/component';
import { AulaViewComponent } from './component/aula/view/component';
import { AulaAddComponent } from './component/aula/add/component';
import { AulaEditComponent } from './component/aula/edit/component';
import { AulaService } from './service/aula/service';

import { AvaliacaoListComponent } from './component/avaliacao/list/component';
import { AvaliacaoViewComponent } from './component/avaliacao/view/component';
import { AvaliacaoAddComponent } from './component/avaliacao/add/component';
import { AvaliacaoEditComponent } from './component/avaliacao/edit/component';
import { AvaliacaoService } from './service/avaliacao/service';

import { AvaliacaoVestibulandoListComponent } from './component/avaliacao-vestibulando/list/component';
import { AvaliacaoVestibulandoViewComponent } from './component/avaliacao-vestibulando/view/component';
import { AvaliacaoVestibulandoAddComponent } from './component/avaliacao-vestibulando/add/component';
import { AvaliacaoVestibulandoEditComponent } from './component/avaliacao-vestibulando/edit/component';
import { AvaliacaoVestibulandoService } from './service/avaliacao-vestibulando/service';

import { CursoListComponent } from './component/curso/list/component';
import { CursoViewComponent } from './component/curso/view/component';
import { CursoAddComponent } from './component/curso/add/component';
import { CursoEditComponent } from './component/curso/edit/component';
import { CursoService } from './service/curso/service';

import { DiscenteListComponent } from './component/discente/list/component';
import { DiscenteViewComponent } from './component/discente/view/component';
import { DiscenteAddComponent } from './component/discente/add/component';
import { DiscenteEditComponent } from './component/discente/edit/component';
import { DiscenteService } from './service/discente/service';

import { DisciplinaListComponent } from './component/disciplina/list/component';
import { DisciplinaViewComponent } from './component/disciplina/view/component';
import { DisciplinaAddComponent } from './component/disciplina/add/component';
import { DisciplinaEditComponent } from './component/disciplina/edit/component';
import { DisciplinaService } from './service/disciplina/service';

import { DocenteListComponent } from './component/docente/list/component';
import { DocenteViewComponent } from './component/docente/view/component';
import { DocenteAddComponent } from './component/docente/add/component';
import { DocenteEditComponent } from './component/docente/edit/component';
import { DocenteService } from './service/docente/service';

import { EstruturaCurricularListComponent } from './component/estrutura-curricular/list/component';
import { EstruturaCurricularViewComponent } from './component/estrutura-curricular/view/component';
import { EstruturaCurricularAddComponent } from './component/estrutura-curricular/add/component';
import { EstruturaCurricularEditComponent } from './component/estrutura-curricular/edit/component';
import { EstruturaCurricularService } from './service/estrutura-curricular/service';

import { OfertaCursoListComponent } from './component/oferta-curso/list/component';
import { OfertaCursoViewComponent } from './component/oferta-curso/view/component';
import { OfertaCursoAddComponent } from './component/oferta-curso/add/component';
import { OfertaCursoEditComponent } from './component/oferta-curso/edit/component';
import { OfertaCursoService } from './service/oferta-curso/service';

import { OfertaDisciplinaListComponent } from './component/oferta-disciplina/list/component';
import { OfertaDisciplinaViewComponent } from './component/oferta-disciplina/view/component';
import { OfertaDisciplinaAddComponent } from './component/oferta-disciplina/add/component';
import { OfertaDisciplinaEditComponent } from './component/oferta-disciplina/edit/component';
import { OfertaDisciplinaService } from './service/oferta-disciplina/service';

import { ParticipacaoAulaListComponent } from './component/participacao-aula/list/component';
import { ParticipacaoAulaViewComponent } from './component/participacao-aula/view/component';
import { ParticipacaoAulaAddComponent } from './component/participacao-aula/add/component';
import { ParticipacaoAulaEditComponent } from './component/participacao-aula/edit/component';
import { ParticipacaoAulaService } from './service/participacao-aula/service';

import { ParticipacaoAvaliacaoListComponent } from './component/participacao-avaliacao/list/component';
import { ParticipacaoAvaliacaoViewComponent } from './component/participacao-avaliacao/view/component';
import { ParticipacaoAvaliacaoAddComponent } from './component/participacao-avaliacao/add/component';
import { ParticipacaoAvaliacaoEditComponent } from './component/participacao-avaliacao/edit/component';
import { ParticipacaoAvaliacaoService } from './service/participacao-avaliacao/service';

import { TurmaListComponent } from './component/turma/list/component';
import { TurmaViewComponent } from './component/turma/view/component';
import { TurmaAddComponent } from './component/turma/add/component';
import { TurmaEditComponent } from './component/turma/edit/component';
import { TurmaService } from './service/turma/service';

import { VestibulandoListComponent } from './component/vestibulando/list/component';
import { VestibulandoViewComponent } from './component/vestibulando/view/component';
import { VestibulandoAddComponent } from './component/vestibulando/add/component';
import { VestibulandoEditComponent } from './component/vestibulando/edit/component';
import { VestibulandoService } from './service/vestibulando/service';

import { VestibularListComponent } from './component/vestibular/list/component';
import { VestibularViewComponent } from './component/vestibular/view/component';
import { VestibularAddComponent } from './component/vestibular/add/component';
import { VestibularEditComponent } from './component/vestibular/edit/component';
import { VestibularService } from './service/vestibular/service';


export let AppInjector: Injector;


@NgModule({
	declarations: [
		AppComponent,

		NavComponent,

		HomeComponent,
		LoginComponent,
		LogoutComponent,
		UserComponent,

		AulaListComponent,
		AulaViewComponent,
		AulaAddComponent,
		AulaEditComponent,

		AvaliacaoListComponent,
		AvaliacaoViewComponent,
		AvaliacaoAddComponent,
		AvaliacaoEditComponent,

		AvaliacaoVestibulandoListComponent,
		AvaliacaoVestibulandoViewComponent,
		AvaliacaoVestibulandoAddComponent,
		AvaliacaoVestibulandoEditComponent,

		CursoListComponent,
		CursoViewComponent,
		CursoAddComponent,
		CursoEditComponent,

		DiscenteListComponent,
		DiscenteViewComponent,
		DiscenteAddComponent,
		DiscenteEditComponent,

		DisciplinaListComponent,
		DisciplinaViewComponent,
		DisciplinaAddComponent,
		DisciplinaEditComponent,

		DocenteListComponent,
		DocenteViewComponent,
		DocenteAddComponent,
		DocenteEditComponent,

		EstruturaCurricularListComponent,
		EstruturaCurricularViewComponent,
		EstruturaCurricularAddComponent,
		EstruturaCurricularEditComponent,

		OfertaCursoListComponent,
		OfertaCursoViewComponent,
		OfertaCursoAddComponent,
		OfertaCursoEditComponent,

		OfertaDisciplinaListComponent,
		OfertaDisciplinaViewComponent,
		OfertaDisciplinaAddComponent,
		OfertaDisciplinaEditComponent,

		ParticipacaoAulaListComponent,
		ParticipacaoAulaViewComponent,
		ParticipacaoAulaAddComponent,
		ParticipacaoAulaEditComponent,

		ParticipacaoAvaliacaoListComponent,
		ParticipacaoAvaliacaoViewComponent,
		ParticipacaoAvaliacaoAddComponent,
		ParticipacaoAvaliacaoEditComponent,

		TurmaListComponent,
		TurmaViewComponent,
		TurmaAddComponent,
		TurmaEditComponent,

		VestibulandoListComponent,
		VestibulandoViewComponent,
		VestibulandoAddComponent,
		VestibulandoEditComponent,

		VestibularListComponent,
		VestibularViewComponent,
		VestibularAddComponent,
		VestibularEditComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true },
		AulaService,
		AvaliacaoService,
		AvaliacaoVestibulandoService,
		CursoService,
		DiscenteService,
		DisciplinaService,
		DocenteService,
		EstruturaCurricularService,
		OfertaCursoService,
		OfertaDisciplinaService,
		ParticipacaoAulaService,
		ParticipacaoAvaliacaoService,
		TurmaService,
		VestibulandoService,
		VestibularService,
	],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor(private injector: Injector) {
		AppInjector = this.injector;
	}

}
