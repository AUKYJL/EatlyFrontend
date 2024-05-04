import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DishService } from 'src/app/services/dish.service';
import { ItemsService } from 'src/app/services/items.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import {
	IDish,
	IRestaurant,
	ItemsWithPaginationTypes,
} from 'src/app/types/types';

@Component({
	selector: 'app-items-with-pagination',
	templateUrl: './items-with-pagination.component.html',
	styleUrls: ['./items-with-pagination.component.scss'],
})
export class ItemsWithPaginationComponent implements OnInit {
	constructor(
		private restaurantService: RestaurantService,
		private dishService: DishService,
		public itemsService: ItemsService,
		private route: ActivatedRoute
	) {}

	type!: ItemsWithPaginationTypes;
	cols: number = 3;

	public types = ItemsWithPaginationTypes;
	public page: number = 1;
	public countPages = 1;
	private limit: number = 6;
	public restaurants$ = new Observable<IRestaurant[]>();
	public dishes$ = new Observable<IDish[]>();

	ngOnInit(): void {
		if (this.isCorrectRoute()) {
			this.getItems();
		}
	}
	private isCorrectRoute(): boolean {
		let isCorrect = false;
		this.route.paramMap.subscribe((params) => {
			let type = params.get('contentType');
			if (type) {
				if (
					Object.values(ItemsWithPaginationTypes).includes(
						type as ItemsWithPaginationTypes
					)
				) {
					this.type = type as ItemsWithPaginationTypes;
					isCorrect = true;
				}
			}
		});
		return isCorrect;
	}
	private getItems() {
		switch (this.type) {
			case ItemsWithPaginationTypes.dishes:
				this.cols = 5;
				this.limit = this.cols * 2;
				this.dishes$ = this.dishService.getDishesWithPaginations(
					this.page,
					this.limit
				);
				this.dishService.getAllDishes().subscribe((r) => {
					this.countPages = Math.ceil(r.length / this.limit);
				});
				break;
			case ItemsWithPaginationTypes.restaurants:
				this.restaurants$ = this.restaurantService.getRestaurantsWithPagination(
					this.page,
					this.limit
				);
				this.cols = 3;
				this.limit = this.cols * 2;
				this.restaurantService.getAllRestaurants().subscribe((r) => {
					this.countPages = Math.ceil(r.length / this.limit);
				});
				break;

			default:
				break;
		}
	}

	public nextPage() {
		if (this.page < this.countPages) {
			this.page++;
			this.getItems();
		}
	}
	public prevPage() {
		if (this.page > 1) {
			this.page--;
			this.getItems();
		}
	}
	public openThisPage(id: number) {
		this.page = id;
		this.getItems();
	}
}
