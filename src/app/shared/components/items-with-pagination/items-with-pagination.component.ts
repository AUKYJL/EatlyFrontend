import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DishService } from 'src/app/services/dish.service';
import { ItemsService } from 'src/app/services/items.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-items-with-pagination',
	templateUrl: './items-with-pagination.component.html',
	styleUrls: ['./items-with-pagination.component.scss'],
})
export class ItemsWithPaginationComponent implements OnInit {
	constructor(
		private restaurantService: RestaurantService,
		private dishService: DishService,
		public itemsService: ItemsService
	) {}

	@Input({ required: true }) type!: ItemsWithPaginationTypes;
	@Input() restaurantId?: number;
	@Input() title?: string;
	@Input() hasHover: boolean = false;

	cols: number = 3;

	public types = ItemsWithPaginationTypes;
	public page: number = 1;
	public countPages = 1;
	private limit: number = 6;
	public items$ = new Observable();

	ngOnInit(): void {
		this.getItems();
		this.itemsService.deletedItem.subscribe(() => {
			this.getItems();
		});
	}

	private getItems() {
		switch (this.type) {
			case ItemsWithPaginationTypes.dishes:
				this.cols = 5;
				this.limit = this.cols * 2;
				this.items$ = this.dishService.getDishesWithPaginations(
					this.page,
					this.limit
				);
				this.dishService.getAllDishes().subscribe((d) => {
					this.countPages = Math.ceil(d.length / this.limit);
				});
				break;
			case ItemsWithPaginationTypes.restaurantDishes:
				this.cols = 5;
				this.limit = this.cols * 2;
				this.items$ = this.dishService.getRestaurantDishesWithPagination(
					this.restaurantId!,
					this.page,
					this.limit
				);
				this.dishService
					.getRestaurantDishes(this.restaurantId!)
					.subscribe((d) => {
						this.countPages = Math.ceil(d.length / this.limit);
					});
				break;
			case ItemsWithPaginationTypes.restaurants:
				this.cols = 3;
				this.limit = this.cols * 2;
				this.items$ = this.restaurantService.getRestaurantsWithPagination(
					this.page,
					this.limit
				);
				this.restaurantService.getAllRestaurants().subscribe((r) => {
					this.countPages = Math.ceil(r.length / this.limit);
				});
				break;
			case ItemsWithPaginationTypes.bookmarkedRestaurants:
				this.cols = 3;
				this.limit = this.cols * 2;
				this.items$ =
					this.restaurantService.getAllBookmarkedRestaurantsWithPagination(
						this.page,
						this.limit
					);

				this.restaurantService.getAllBookmarkedRestaurants().subscribe((r) => {
					this.countPages = Math.ceil(r.length / this.limit);
				});

				break;
			case ItemsWithPaginationTypes.ownRestaurants:
				this.cols = 3;
				this.limit = this.cols * 2;
				this.items$ = this.restaurantService.getAllOwnRestaurantsWithPagination(
					this.page,
					this.limit
				);
				this.restaurantService.getAllOwnRestaurants().subscribe((r) => {
					this.countPages = Math.ceil(r.length / this.limit);
				});

				break;
			default:
				break;
		}
	}

	public handleOnChangePage(page: number) {
		this.page = page;
		this.getItems();
	}
}
