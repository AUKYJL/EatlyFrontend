import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IRestaurant } from 'src/app/types/types';

@Component({
	selector: 'app-items-with-pagination',
	templateUrl: './items-with-pagination.component.html',
	styleUrls: ['./items-with-pagination.component.scss'],
})
export class ItemsWithPaginationComponent implements OnInit {
	constructor(private restaurantService: RestaurantService) {}
	public page: number = 1;
	public countPages = 1;
	private limit: number = 6;
	public restaurants$ = new Observable<IRestaurant[]>();

	ngOnInit(): void {
		this.getRestaurants();
		this.getCountPages();
	}
	private getRestaurants() {
		this.restaurants$ = this.restaurantService.getRestaurantsWithPagination(
			this.page,
			this.limit
		);
	}
	private getCountPages() {
		this.restaurantService.getAllRestaurants().subscribe((r) => {
			console.log(r.length);

			this.countPages = Math.ceil(r.length / this.limit);
		});
	}

	public nextPage() {
		if (this.page < this.countPages) {
			this.page++;
			this.getRestaurants();
		}
	}
	public prevPage() {
		if (this.page > 1) {
			this.page--;
			this.getRestaurants();
		}
	}
	public openThisPage(id: number) {
		this.page = id;
		this.getRestaurants();
	}
}
