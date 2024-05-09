import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DishService } from 'src/app/services/dish.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import {
	IAdvantagesList,
	IDish,
	IRestaurant,
	ItemsWithPaginationTypes,
} from 'src/app/types/types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(
		private restaurantService: RestaurantService,
		private dishService: DishService
	) {}

	public advantagesList: IAdvantagesList[] = [
		{
			title: '10K+',
			desc: 'Satisfied Costumers All Great Over The World ',
		},
		{
			title: '4M',
			desc: 'Healthy Dishes Sold Including Milk Shakes Smooth',
		},
		{
			title: '99.99%',
			desc: 'Reliable Customer Support We Provide Great Experiences',
		},
	];
	public types = ItemsWithPaginationTypes;
	public restaurants$ = new Observable<IRestaurant[]>();
	public dishes$ = new Observable<IDish[]>();

	ngOnInit(): void {
		this.restaurants$ = this.restaurantService.getRestaurantsWithPagination(
			1,
			3
		);
		this.dishes$ = this.dishService.getDishesWithPaginations(1, 5);
	}
}
