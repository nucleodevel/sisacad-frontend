import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from '../../abstract/service/service';
import { Estado } from '../entity/entity';
import { Observable } from 'rxjs';

@Injectable()
export class EstadoService extends AbstractService<Estado> {

  private static readonly apiUrl = 'http://localhost:8080/';
  private static readonly apiPath = 'estados';

  constructor(protected httpClient: HttpClient) {
    super(httpClient, EstadoService.apiUrl + EstadoService.apiPath);
  }
}
