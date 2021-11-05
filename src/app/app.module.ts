import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoriaListComponent } from './domain/categoria/component/list/component';
import { CategoriaViewComponent } from './domain/categoria/component/view/component';
import { CategoriaAddComponent } from './domain/categoria/component/add/component'; 
import { CategoriaEditComponent } from './domain/categoria/component/edit/component';
import { CategoriaService } from './domain/categoria/service/service';

import { EstadoListComponent } from './domain/estado/component/list/component';
import { EstadoViewComponent } from './domain/estado/component/view/component';
import { EstadoAddComponent } from './domain/estado/component/add/component'; 
import { EstadoEditComponent } from './domain/estado/component/edit/component';
import { EstadoService } from './domain/estado/service/service';

import { ProdutoListComponent } from './domain/produto/component/list/component';
import { ProdutoViewComponent } from './domain/produto/component/view/component';
import { ProdutoAddComponent } from './domain/produto/component/add/component'; 
import { ProdutoEditComponent } from './domain/produto/component/edit/component';
import { ProdutoService } from './domain/produto/service/service';

@NgModule({
  declarations: [
    AppComponent,

    CategoriaListComponent,
    CategoriaViewComponent,
    CategoriaAddComponent,
    CategoriaEditComponent,

    EstadoListComponent,
    EstadoViewComponent,
    EstadoAddComponent,
    EstadoEditComponent,

    ProdutoListComponent,
    ProdutoViewComponent,
    ProdutoAddComponent,
    ProdutoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
	CategoriaService,
	EstadoService,
	ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }