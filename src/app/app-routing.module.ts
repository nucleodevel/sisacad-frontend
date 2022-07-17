import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoListComponent } from './domain/curso/component/list/component';
import { CursoViewComponent } from './domain/curso/component/view/component';
import { CursoAddComponent } from './domain/curso/component/add/component';
import { CursoEditComponent } from './domain/curso/component/edit/component';

import { DisciplinaListComponent } from './domain/disciplina/component/list/component';
import { DisciplinaViewComponent } from './domain/disciplina/component/view/component';
import { DisciplinaAddComponent } from './domain/disciplina/component/add/component';
import { DisciplinaEditComponent } from './domain/disciplina/component/edit/component';

import { DocenteListComponent } from './domain/docente/component/list/component';
import { DocenteViewComponent } from './domain/docente/component/view/component';
import { DocenteAddComponent } from './domain/docente/component/add/component';
import { DocenteEditComponent } from './domain/docente/component/edit/component';

import { VestibularListComponent } from './domain/vestibular/component/list/component';
import { VestibularViewComponent } from './domain/vestibular/component/view/component';
import { VestibularAddComponent } from './domain/vestibular/component/add/component';
import { VestibularEditComponent } from './domain/vestibular/component/edit/component';

const routes: Routes = [
  { path: 'curso', component: CursoListComponent },
  { path: 'curso/list', component: CursoListComponent },
  { path: 'curso/view/:id', component: CursoViewComponent },
  { path: 'curso/add', component: CursoAddComponent },
  { path: 'curso/edit/:id', component: CursoEditComponent },

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
