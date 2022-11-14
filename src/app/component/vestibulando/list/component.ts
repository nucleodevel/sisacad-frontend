import { Component, ViewChild, ElementRef } from '@angular/core';

import { AbstractListComponent } from '../../../component/abstract/list/component';

import { Vestibulando } from '../../../domain/vestibulando/entity';
import { VestibulandoDto } from '../../../dto/vestibulando/dto';
import { VestibulandoService } from '../../../service/vestibulando/service';

@Component({
	selector: 'app-vestibulando-list',
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})
export class VestibulandoListComponent extends AbstractListComponent<Vestibulando, VestibulandoDto, VestibulandoService> {

	/*
	 * Attributes
	 */

	@ViewChild('loader') loader!: ElementRef;
	@ViewChild('bodyCard') bodyCard!: ElementRef;

	/*
	 * Constructors
	 */

	constructor(protected service: VestibulandoService) {
		super(service, 'vestibulando');
	}

	/*
	 * Component methods
	 */

	ngOnInit() {
		super.ngOnInitSuper();
	}

	ngAfterViewInit() {
		this.ngAfterViewInitSuper(this.loader, this.bodyCard);
	}

	ngOnInitSuperAdditional() {

	}

	/*
	 * Permissions
	 */

	public canView(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO']);
	}

	public canAdd(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO']);
	}

	public canEdit(): boolean {
		return this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO']);
	}

	/*
	 * Auxiliares
	 */

	reloadData() {
		if (this.authenticationService.hasAnyRole(['ROLE_ADMIN', 'ROLE_PEDAGOGICO', 'ROLE_GRADUACAO'])) {
			super.reloadData();
		} else if (this.authenticationService.hasRole('ROLE_VESTIBULANDO')) {
			var sessionUser = this.getSessionUser();
			var username = sessionUser.username;

			this.service.findByUsername(username).subscribe(data => {
				var listItem = this.service.makeEntityArrayFromDtoArray(data);
				var item = listItem.length == 0 ? null : listItem[0];

				if (item == null) {
					this.entities = [];
				} else {
					this.router.navigate(['/' + this.routerPrefix + '/view/' + item.id]);
				}


			}, error => {
				this.setResultMessage("FAILURE", error);
			});

		}
	}

}