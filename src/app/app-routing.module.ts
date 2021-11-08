import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaListComponent } from './domain/categoria/component/list/component';
import { CategoriaViewComponent } from './domain/categoria/component/view/component';
import { CategoriaAddComponent } from './domain/categoria/component/add/component';
import { CategoriaEditComponent } from './domain/categoria/component/edit/component';

import { CidadeListComponent } from './domain/cidade/component/list/component';
import { CidadeViewComponent } from './domain/cidade/component/view/component';
import { CidadeAddComponent } from './domain/cidade/component/add/component';
import { CidadeEditComponent } from './domain/cidade/component/edit/component';

import { ClienteListComponent } from './domain/cliente/component/list/component';
import { ClienteViewComponent } from './domain/cliente/component/view/component';
import { ClienteAddComponent } from './domain/cliente/component/add/component';
import { ClienteEditComponent } from './domain/cliente/component/edit/component';

import { EnderecoListComponent } from './domain/endereco/component/list/component';
import { EnderecoViewComponent } from './domain/endereco/component/view/component';
import { EnderecoAddComponent } from './domain/endereco/component/add/component';
import { EnderecoEditComponent } from './domain/endereco/component/edit/component';

import { EspecieListComponent } from './domain/especie/component/list/component';
import { EspecieViewComponent } from './domain/especie/component/view/component';
import { EspecieAddComponent } from './domain/especie/component/add/component';
import { EspecieEditComponent } from './domain/especie/component/edit/component';

import { EstadoListComponent } from './domain/estado/component/list/component';
import { EstadoViewComponent } from './domain/estado/component/view/component';
import { EstadoAddComponent } from './domain/estado/component/add/component';
import { EstadoEditComponent } from './domain/estado/component/edit/component';

import { FuncionarioListComponent } from './domain/funcionario/component/list/component';
import { FuncionarioViewComponent } from './domain/funcionario/component/view/component';
import { FuncionarioAddComponent } from './domain/funcionario/component/add/component';
import { FuncionarioEditComponent } from './domain/funcionario/component/edit/component';

import { PessoaListComponent } from './domain/pessoa/component/list/component';
import { PessoaViewComponent } from './domain/pessoa/component/view/component';
import { PessoaAddComponent } from './domain/pessoa/component/add/component';
import { PessoaEditComponent } from './domain/pessoa/component/edit/component';

import { PetListComponent } from './domain/pet/component/list/component';
import { PetViewComponent } from './domain/pet/component/view/component';
import { PetAddComponent } from './domain/pet/component/add/component';
import { PetEditComponent } from './domain/pet/component/edit/component';

import { ProdutoListComponent } from './domain/produto/component/list/component';
import { ProdutoViewComponent } from './domain/produto/component/view/component';
import { ProdutoAddComponent } from './domain/produto/component/add/component';
import { ProdutoEditComponent } from './domain/produto/component/edit/component';

import { RacaListComponent } from './domain/raca/component/list/component';
import { RacaViewComponent } from './domain/raca/component/view/component';
import { RacaAddComponent } from './domain/raca/component/add/component';
import { RacaEditComponent } from './domain/raca/component/edit/component';

const routes: Routes = [
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/list', component: CategoriaListComponent },
  { path: 'categorias/view/:id', component: CategoriaViewComponent },
  { path: 'categorias/add', component: CategoriaAddComponent },
  { path: 'categorias/edit/:id', component: CategoriaEditComponent },

  { path: 'cidades', component: CidadeListComponent },
  { path: 'cidades/list', component: CidadeListComponent },
  { path: 'cidades/view/:id', component: CidadeViewComponent },
  { path: 'cidades/add', component: CidadeAddComponent },
  { path: 'cidades/edit/:id', component: CidadeEditComponent },

  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/list', component: ClienteListComponent },
  { path: 'clientes/view/:id', component: ClienteViewComponent },
  { path: 'clientes/add', component: ClienteAddComponent },
  { path: 'clientes/edit/:id', component: ClienteEditComponent },

  { path: 'enderecos', component: EnderecoListComponent },
  { path: 'enderecos/list', component: EnderecoListComponent },
  { path: 'enderecos/view/:id', component: EnderecoViewComponent },
  { path: 'enderecos/add', component: EnderecoAddComponent },
  { path: 'enderecos/edit/:id', component: EnderecoEditComponent },

  { path: 'especies', component: EspecieListComponent },
  { path: 'especies/list', component: EspecieListComponent },
  { path: 'especies/view/:id', component: EspecieViewComponent },
  { path: 'especies/add', component: EspecieAddComponent },
  { path: 'especies/edit/:id', component: EspecieEditComponent },

  { path: 'estados', component: EstadoListComponent },
  { path: 'estados/list', component: EstadoListComponent },
  { path: 'estados/view/:id', component: EstadoViewComponent },
  { path: 'estados/add', component: EstadoAddComponent },
  { path: 'estados/edit/:id', component: EstadoEditComponent },

  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionarios/list', component: FuncionarioListComponent },
  { path: 'funcionarios/view/:id', component: FuncionarioViewComponent },
  { path: 'funcionarios/add', component: FuncionarioAddComponent },
  { path: 'funcionarios/edit/:id', component: FuncionarioEditComponent },

  { path: 'pessoas', component: PessoaListComponent },
  { path: 'pessoas/list', component: PessoaListComponent },
  { path: 'pessoas/view/:id', component: PessoaViewComponent },
  { path: 'pessoas/add', component: PessoaAddComponent },
  { path: 'pessoas/edit/:id', component: PessoaEditComponent },

  { path: 'pets', component: PetListComponent },
  { path: 'pets/list', component: PetListComponent },
  { path: 'pets/view/:id', component: PetViewComponent },
  { path: 'pets/add', component: PetAddComponent },
  { path: 'pets/edit/:id', component: PetEditComponent },

  { path: 'produtos', component: ProdutoListComponent },
  { path: 'produtos/list', component: ProdutoListComponent },
  { path: 'produtos/view/:id', component: ProdutoViewComponent },
  { path: 'produtos/add', component: ProdutoAddComponent },
  { path: 'produtos/edit/:id', component: ProdutoEditComponent },

  { path: 'racas', component: RacaListComponent },
  { path: 'racas/list', component: RacaListComponent },
  { path: 'racas/view/:id', component: RacaViewComponent },
  { path: 'racas/add', component: RacaAddComponent },
  { path: 'racas/edit/:id', component: RacaEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
