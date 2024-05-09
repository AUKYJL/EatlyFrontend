import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IRestaurant, RestaurantTags } from 'src/app/types/types';

@Component({
	selector: 'app-restaurant-card',
	templateUrl: './restaurant-card.component.html',
	styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private restaurantService: RestaurantService,
		private toastService: ToastService,
		private router: Router
	) {}

	@Input({ required: true }) restaurant!: IRestaurant;

	public restaurantTags = RestaurantTags;
	public bookmarked: boolean = false;
	public hoveredLeft: boolean = false;
	public hoveredRight: boolean = false;

	ngOnInit(): void {
		this.bookmarked = this.getBookmarked();
	}
	private getBookmarked() {
		const userId = this.authService.user?.id;
		if (userId) {
			const restaurants = this.restaurant?.bookmarkedUsers;
			if (!restaurants) return false;
			for (let i = 0; i < restaurants.length; i++) {
				const { id } = restaurants[i];

				if (id === userId) return true;
			}
		}
		return false;
	}

	public changeBookmark() {
		if (this.authService.checkAuth()?.token) {
			this.bookmarked = !this.bookmarked;
			this.restaurantService.changeBookmark(this.restaurant!.id);
		} else {
			this.toastService.error('U must be authorized');
		}
	}

	public setTagStyle(tag: string): string {
		switch (tag) {
			case RestaurantTags.bad:
				return '_tag-red';
			case RestaurantTags.medium:
				return '_tag-yellow';
			case RestaurantTags.mega:
				return '_tag-green';
			default:
				return '';
		}
	}

	public deleteRestaurant() {
		this.restaurantService.delete(this.restaurant!.id).subscribe((r) => {
			this.restaurantService.deletedRestaurant.emit();
		});
	}
	public editRestaurant() {
		this.restaurantService.editingRestaurant = this.restaurant;
		this.router.navigate(['/profile/restaurants/edit']);
	}
}
