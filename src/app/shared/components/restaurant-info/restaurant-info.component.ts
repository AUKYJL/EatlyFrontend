import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DishService } from 'src/app/services/dish.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import {
	CommentType,
	IDish,
	IRestaurant,
	ItemsWithPaginationTypes,
} from 'src/app/types/types';

@Component({
	selector: 'app-restaurant-info',
	templateUrl: './restaurant-info.component.html',
	styleUrls: ['./restaurant-info.component.scss'],
})
export class RestaurantInfoComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private restaurantService: RestaurantService,
		private dishService: DishService
	) {}

	public restaurant?: IRestaurant;
	public bookmarked?: boolean;
	public types = ItemsWithPaginationTypes;
	public commentTypes = CommentType;

	public popularDishes$ = new Observable<IDish[]>();

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			let id = params.get('id');
			if (id) {
				this.restaurantService.getRestaurantById(+id).subscribe((r) => {
					this.restaurant = r;
					this.bookmarked = this.restaurantService.getBookmarked(r);
					this.getPopular();
				});
			}
		});
	}

	public getPopular() {
		this.popularDishes$ = this.dishService.getPopular(this.restaurant!.id);
	}
}
