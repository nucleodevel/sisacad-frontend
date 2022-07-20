import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AulaListComponent } from './domain/aula/component/list/component';
import { AulaViewComponent } from './domain/aula/component/view/component';
import { AulaAddComponent } from './domain/aula/component/add/component'; 
import { AulaEditComponent } from './domain/aula/component/edit/component';
import { AulaService } from './domain/aula/service/service';

import { AvaliacaoListComponent } from './domain/avaliacao/component/list/component';
import { AvaliacaoViewComponent } from './domain/avaliacao/component/view/component';
import { AvaliacaoAddComponent } from './domain/avaliacao/component/add/component'; 
import { AvaliacaoEditComponent } from './domain/avaliacao/component/edit/component';
import { AvaliacaoService } from './domain/avaliacao/service/service';

import { AvaliacaoVestibulandoListComponent } from './domain/avaliacao-vestibulando/component/list/component';
import { AvaliacaoVestibulandoViewComponent } from './domain/avaliacao-vestibulando/component/view/component';
import { AvaliacaoVestibulandoAddComponent } from './domain/avaliacao-vestibulando/component/add/component'; 
import { AvaliacaoVestibulandoEditComponent } from './domain/avaliacao-vestibulando/component/edit/component';
import { AvaliacaoVestibulandoService } from './domain/avaliacao-vestibulando/service/service';

import { CursoListComponent } from './domain/curso/component/list/component';
import { CursoViewComponent } from './domain/curso/component/view/component';
import { CursoAddComponent } from './domain/curso/component/add/component'; 
import { CursoEditComponent } from './domain/curso/component/edit/component';
import { CursoService } from './domain/curso/service/service';

import { DiscenteListComponent } from './domain/discente/component/list/component';
import { DiscenteViewComponent } from './domain/discente/component/view/component';
import { DiscenteAddComponent } from './domain/discente/component/add/component'; 
import { DiscenteEditComponent } from './domain/discente/component/edit/component';
import { DiscenteService } from './domain/discente/service/service';

import { DisciplinaListComponent } from './domain/disciplina/component/list/component';
import { DisciplinaViewComponent } from './domain/disciplina/component/view/component';
import { DisciplinaAddComponent } from './domain/disciplina/component/add/component'; 
import { DisciplinaEditComponent } from './domain/disciplina/component/edit/component';
import { DisciplinaService } from './domain/disciplina/service/service';

import { DocenteListComponent } from './domain/docente/component/list/component';
import { DocenteViewComponent } from './domain/docente/component/view/component';
import { DocenteAddComponent } from './domain/docente/component/add/component'; 
import { DocenteEditComponent } from './domain/docente/component/edit/component';
import { DocenteService } from './domain/docente/service/service';

import { EstruturaCurricularListComponent } from './domain/estrutura-curricular/component/list/component';
import { EstruturaCurricularViewComponent } from './domain/estrutura-curricular/component/view/component';
import { EstruturaCurricularAddComponent } from './domain/estrutura-curricular/component/add/component'; 
import { EstruturaCurricularEditComponent } from './domain/estrutura-curricular/component/edit/component';
import { EstruturaCurricularService } from './domain/estrutura-curricular/service/service';

import { OfertaCursoListComponent } from './domain/oferta-curso/component/list/component';
import { OfertaCursoViewComponent } from './domain/oferta-curso/component/view/component';
import { OfertaCursoAddComponent } from './domain/oferta-curso/component/add/component'; 
import { OfertaCursoEditComponent } from './domain/oferta-curso/component/edit/component';
import { OfertaCursoService } from './domain/oferta-curso/service/service';

import { OfertaDisciplinaListComponent } from './domain/oferta-disciplina/component/list/component';
import { OfertaDisciplinaViewComponent } from './domain/oferta-disciplina/component/view/component';
import { OfertaDisciplinaAddComponent } from './domain/oferta-disciplina/component/add/component'; 
import { OfertaDisciplinaEditComponent } from './domain/oferta-disciplina/component/edit/component';
import { OfertaDisciplinaService } from './domain/oferta-disciplina/service/service';

import { ParticipacaoAulaListComponent } from './domain/participacao-aula/component/list/component';
import { ParticipacaoAulaViewComponent } from './domain/participacao-aula/component/view/component';
import { ParticipacaoAulaAddComponent } from './domain/participacao-aula/component/add/component'; 
import { ParticipacaoAulaEditComponent } from './domain/participacao-aula/component/edit/component';
import { ParticipacaoAulaService } from './domain/participacao-aula/service/service';

import { ParticipacaoAvaliacaoListComponent } from './domain/participacao-avaliacao/component/list/component';
import { ParticipacaoAvaliacaoViewComponent } from './domain/participacao-avaliacao/component/view/component';
import { ParticipacaoAvaliacaoAddComponent } from './domain/participacao-avaliacao/component/add/component'; 
import { ParticipacaoAvaliacaoEditComponent } from './domain/participacao-avaliacao/component/edit/component';
import { ParticipacaoAvaliacaoService } from './domain/participacao-avaliacao/service/service';

import { TurmaListComponent } from './domain/turma/component/list/component';
import { TurmaViewComponent } from './domain/turma/component/view/component';
import { TurmaAddComponent } from './domain/turma/component/add/component'; 
import { TurmaEditComponent } from './domain/turma/component/edit/component';
import { TurmaService } from './domain/turma/service/service';

import { VestibulandoListComponent } from './domain/vestibulando/component/list/component';
import { VestibulandoViewComponent } from './domain/vestibulando/component/view/component';
import { VestibulandoAddComponent } from './domain/vestibulando/component/add/component'; 
import { VestibulandoEditComponent } from './domain/vestibulando/component/edit/component';
import { VestibulandoService } from './domain/vestibulando/service/service';

import { VestibularListComponent } from './domain/vestibular/component/list/component';
import { VestibularViewComponent } from './domain/vestibular/component/view/component';
import { VestibularAddComponent } from './domain/vestibular/component/add/component'; 
import { VestibularEditComponent } from './domain/vestibular/component/edit/component';
import { VestibularService } from './domain/vestibular/service/service';

@NgModule({
  declarations: [
    AppComponent,

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
export class AppModule { }
