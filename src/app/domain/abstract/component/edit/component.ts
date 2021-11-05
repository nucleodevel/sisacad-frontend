import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractService } from '../../service/service';
import { AbstractEntity } from '../../entity/entity';

export abstract class AbstractEditComponent<E extends AbstractEntity, S extends AbstractService<E>> {

  protected entityService: S;
  protected router: Router;
  protected route: ActivatedRoute;

  routerPrefix: string;

  id!: number;
  entity!: E;

  constructor(entityService: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
	this.entityService = entityService;
	this.router = router;
	this.route = route;
	this.routerPrefix = routerPrefix;
  }

  ngOnInitSuper() {
    this.id = this.route.snapshot.params['id'];
    
    this.entityService.findById(this.id)
      .subscribe(data => {
        console.log(data)
        this.entity = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.entityService.update(this.id, this.entity).subscribe(result => this.list());
  }

  list(){
    this.router.navigate(['/' + this.routerPrefix + '/list']);
  }

}