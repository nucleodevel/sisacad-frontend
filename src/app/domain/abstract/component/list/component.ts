import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractService } from '../../service/service';
import { AbstractEntity } from '../../entity/entity';

export abstract class AbstractListComponent<E extends AbstractEntity, S extends AbstractService<E>> {
	
  protected entityService: S;
  protected router: Router;

  routerPrefix: string;

  entities!: E[];

  constructor(entityService: S, router: Router, routerPrefix: string) {
	this.entityService = entityService;
	this.router = router;
	this.routerPrefix = routerPrefix;
  }

  abstract getEntityString(entity: E): string;

  ngOnInitSuper() {
    this.entityService.findAll().subscribe(data => {
      this.entities = data;
    });
  }

  reloadData() {
    this.entityService.findAll().subscribe(data => {
      this.entities = data;
    });
  }

  view(id: number){
    this.router.navigate(['/' + this.routerPrefix + '/view', id]);
  }

  edit(id: number){
    this.router.navigate(['/' + this.routerPrefix + '/edit', id]);
  }

  remove(id: number){
    this.entityService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  askRemove(entity: E) {
	if (confirm('Remover "' + this.getEntityString(entity) + '"?')) {
      this.remove(entity.id);
    }
  }

}