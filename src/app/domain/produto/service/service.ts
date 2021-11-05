import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from '../../abstract/service/service';
import { Produto } from '../entity/entity';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService extends AbstractService<Produto> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'produtos';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, ProdutoService.apiUrl + ProdutoService.apiPath);
  }
}
