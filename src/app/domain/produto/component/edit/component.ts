import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEditComponent } from '../../../abstract/component/edit/component';

import { Produto } from '../../entity/entity';
import { ProdutoDto } from '../../dto/dto';
import { ProdutoService } from '../../service/service';

import { Categoria } from '../../../categoria/entity/entity';
import { CategoriaService } from '../../../categoria/service/service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ProdutoEditComponent extends AbstractEditComponent<Produto, ProdutoDto, ProdutoService> implements OnInit {
	
  allCategorias!: Categoria[];

  constructor(protected service: ProdutoService, protected router: Router, protected route: ActivatedRoute, 
    protected categoriaService: CategoriaService) {
	super(service, router, route, 'produtos');
  }

  ngOnInit() {
	super.ngOnInitSuper();
	
	this.categoriaService.findAll().subscribe(data => {
	  this.allCategorias = this.categoriaService.makeEntityArrayFromDtoArray(data);
    });
  }

  compareCategoria(o1: Categoria, o2: Categoria) {
	return o1.compare(o2);
  }

}