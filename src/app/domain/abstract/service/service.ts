import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractEntity } from '../entity/entity';
import { AbstractDto } from '../dto/dto';

export abstract class AbstractService<E extends AbstractEntity, DTO extends AbstractDto<E>> {

  protected http: HttpClient;
  protected apiUrl: string;

  constructor(http: HttpClient, apiUrl: string) {
	this.http = http;
    this.apiUrl = apiUrl;
  }

  abstract newEntityInstance(): E;
  abstract newDtoInstance(): DTO;
  
  abstract makeEntityFromDto(dto: DTO): E;

  public makeEntityArrayFromDtoArray(dtos: DTO[]) {
	var entities: E[];
	entities = [];
	
    dtos.forEach(dto => {
      var entity = this.makeEntityFromDto(dto);
      entities.push(entity);
    });

    return entities;
  }

  public findById(id: number) {
    return this.http.get<DTO>(this.apiUrl + '/' + id);
  }

  public findAll(): Observable<DTO[]> {
    return this.http.get<DTO[]>(this.apiUrl);
  }

  public insert(entity: DTO) {
    return this.http.post<DTO>(this.apiUrl, entity);
  }

  public update(id: number, entity: DTO) {
    return this.http.put<DTO>(this.apiUrl + '/' + id, entity);
  }

  public delete(id: number) {
    return this.http.delete<DTO>(this.apiUrl + '/' + id);
  }
}
