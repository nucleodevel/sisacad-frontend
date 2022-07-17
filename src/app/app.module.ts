import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursoListComponent } from './domain/curso/component/list/component';
import { CursoViewComponent } from './domain/curso/component/view/component';
import { CursoAddComponent } from './domain/curso/component/add/component'; 
import { CursoEditComponent } from './domain/curso/component/edit/component';
import { CursoService } from './domain/curso/service/service';

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

import { VestibularListComponent } from './domain/vestibular/component/list/component';
import { VestibularViewComponent } from './domain/vestibular/component/view/component';
import { VestibularAddComponent } from './domain/vestibular/component/add/component'; 
import { VestibularEditComponent } from './domain/vestibular/component/edit/component';
import { VestibularService } from './domain/vestibular/service/service';

@NgModule({
  declarations: [
    AppComponent,

    CursoListComponent,
    CursoViewComponent,
    CursoAddComponent,
    CursoEditComponent,

    DisciplinaListComponent,
    DisciplinaViewComponent,
    DisciplinaAddComponent,
    DisciplinaEditComponent,

    DocenteListComponent,
    DocenteViewComponent,
    DocenteAddComponent,
    DocenteEditComponent,

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
	CursoService,
	DisciplinaService,
	DocenteService,
	VestibularService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
