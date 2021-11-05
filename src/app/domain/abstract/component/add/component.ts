import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEntity } from '../../entity/entity';
import { AbstractDto } from '../../dto/dto';
import { AbstractService } from '../../service/service';

export abstract class AbstractAddComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>> {

  protected service: S;
  protected router: Router;
  protected route: ActivatedRoute;

  routerPrefix: string;

  entity!: E;

  constructor(service: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
	this.service = service;
	this.router = router;
	this.route = route;
	this.routerPrefix = routerPrefix;
  }

  ngOnInitSuper() {
    this.entity = this.service.newEntityInstance();
  }

  onSubmit() {
	var dto = this.service.newDtoInstance();
	dto.copyFromEntity(this.entity);
    this.service.insert(dto).subscribe(result => this.list());
  }

  list(){
    this.router.navigate(['/' + this.routerPrefix + '/list']);
  }

}