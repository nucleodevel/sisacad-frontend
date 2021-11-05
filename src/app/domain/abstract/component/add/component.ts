import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractService } from '../../service/service';
import { AbstractEntity } from '../../entity/entity';

export abstract class AbstractAddComponent<E extends AbstractEntity, S extends AbstractService<E>> {

  protected entityService: S;
  protected router: Router;
  protected route: ActivatedRoute;

  routerPrefix: string;

  entity!: E;

  constructor(entityService: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
	this.entityService = entityService;
	this.router = router;
	this.route = route;
	this.routerPrefix = routerPrefix;
  }

  abstract newEntityInstance(): E;

  ngOnInitSuper() {
    this.entity = this.newEntityInstance();
  }

  onSubmit() {
    this.entityService.insert(this.entity).subscribe(result => this.list());
  }

  list(){
    this.router.navigate(['/' + this.routerPrefix + '/list']);
  }

}