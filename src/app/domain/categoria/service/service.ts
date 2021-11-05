import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from '../../abstract/service/service';
import { Categoria } from '../entity/entity';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService extends AbstractService<Categoria> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'categorias';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, CategoriaService.apiUrl + CategoriaService.apiPath);
  }
}
