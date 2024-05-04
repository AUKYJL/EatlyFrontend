import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IRestaurant } from 'src/app/types/types';

@Component({
	selector: 'app-restaraunt-cards-section',
	templateUrl: './restaraunt-cards-section.component.html',
	styleUrls: ['./restaraunt-cards-section.component.scss'],
})
export class RestarauntCardsSectionComponent implements OnInit {
	constructor(
		private restaurantService: RestaurantService,
		private route: Router
	) {}
	public restaurants$ = new Observable<IRestaurant[]>();
	ngOnInit(): void {
		this.restaurants$ = this.restaurantService.getRestaurantsWithPagination(
			1,
			3
		);
	}

	@Input() left: boolean = false;

	public goToAllRestaurants() {
		this.route.navigate(['items/restaurants']);
		window.scrollTo(0, 0);
	}
}
