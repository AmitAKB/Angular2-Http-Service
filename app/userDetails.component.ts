import { Component, OnInit } from '@angular/core';
import { UserServices } from './userServices.component';

@Component({
	selector:'user-details',
	template:`
		<ul class="list-group" *ngFor="let user of userDetails">
			<li class="list-group-item">{{user.first_name}}</li>
		</ul>

	`
});

export class UserDetailsComponent implements OnInit{
	
	userDetails: [];

	constructor(private _userService: UserServices){}
	
	ngOnInit(){
		this._userService.getUserService()
		.subscribe(resUserData => this.userDetails = resUserData);
	}
}