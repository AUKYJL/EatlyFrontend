import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDish, IRestaurant } from '../types/types';
import { RestaurantService } from './restaurant.service';

@Injectable()
export class ItemsService {
	constructor(private restaurantService: RestaurantService) {}

	public items$: Observable<IRestaurant[] | IDish[]> = of([]);

	public getRestaurants(page: number, limit: number) {
		return this.restaurantService.getRestaurantsWithPagination(page, limit);
	}
	public getDishes(page: number, limit: number) {
		return this.restaurantService.getRestaurantsWithPagination(page, limit);
	}
}
