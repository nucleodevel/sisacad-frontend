import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractEntity } from '../entity/entity';
import { Observable } from 'rxjs';

export abstract class AbstractService<E extends AbstractEntity> {

  protected http: HttpClient;
  protected apiUrl: string;

  constructor(http: HttpClient, apiUrl: string) {
	this.http = http;
    this.apiUrl = apiUrl;
  }

  public findById(id: number) {
    return this.http.get<E>(this.apiUrl + '/' + id);
  }

  public findAll(): Observable<E[]> {
    return this.http.get<E[]>(this.apiUrl);
  }

  public insert(entity: E) {
    return this.http.post<E>(this.apiUrl, entity);
  }

  public update(id: number, entity: E) {
    return this.http.put<E>(this.apiUrl + '/' + id, entity);
  }

  public delete(id: number) {
    return this.http.delete<E>(this.apiUrl + '/' + id);
  }
}
