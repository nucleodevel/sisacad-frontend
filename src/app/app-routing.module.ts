import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaListComponent } from './domain/categoria/component/list/component';
import { CategoriaViewComponent } from './domain/categoria/component/view/component';
import { CategoriaAddComponent } from './domain/categoria/component/add/component';
import { CategoriaEditComponent } from './domain/categoria/component/edit/component';

import { EstadoListComponent } from './domain/estado/component/list/component';
import { EstadoViewComponent } from './domain/estado/component/view/component';
import { EstadoAddComponent } from './domain/estado/component/add/component';
import { EstadoEditComponent } from './domain/estado/component/edit/component';

import { ProdutoListComponent } from './domain/produto/component/list/component';
import { ProdutoViewComponent } from './domain/produto/component/view/component';
import { ProdutoAddComponent } from './domain/produto/component/add/component';
import { ProdutoEditComponent } from './domain/produto/component/edit/component';

const routes: Routes = [
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/list', component: CategoriaListComponent },
  { path: 'categorias/view/:id', component: CategoriaViewComponent },
  { path: 'categorias/add', component: CategoriaAddComponent },
  { path: 'categorias/edit/:id', component: CategoriaEditComponent },

  { path: 'estados', component: EstadoListComponent },
  { path: 'estados/list', component: EstadoListComponent },
  { path: 'estados/view/:id', component: EstadoViewComponent },
  { path: 'estados/add', component: EstadoAddComponent },
  { path: 'estados/edit/:id', component: EstadoEditComponent },

  { path: 'produtos', component: ProdutoListComponent },
  { path: 'produtos/list', component: ProdutoListComponent },
  { path: 'produtos/view/:id', component: ProdutoViewComponent },
  { path: 'produtos/add', component: ProdutoAddComponent },
  { path: 'produtos/edit/:id', component: ProdutoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
