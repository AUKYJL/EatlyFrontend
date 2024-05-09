import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-profile-restaurants',
	templateUrl: './profile-restaurants.component.html',
	styleUrls: ['./profile-restaurants.component.scss'],
})
export class ProfileRestaurantsComponent implements OnInit {
	constructor(private router: Router) {}

	public types = ItemsWithPaginationTypes;

	ngOnInit(): void {}
	public goToCreateNew() {
		this.router.navigate(['profile/restaurants/create-new']);
		window.scrollTo(0, 0);
	}
}
