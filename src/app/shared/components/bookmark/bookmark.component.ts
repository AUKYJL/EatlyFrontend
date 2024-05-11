import { Component, Input } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
	selector: 'app-bookmark',
	templateUrl: './bookmark.component.html',
	styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent {
	constructor(
		private authService: AuthService,
		private toastService: ToastService,
		private restaurantService: RestaurantService
	) {}

	@Input({ required: true }) restaurantId!: number | undefined;
	@Input({ required: true }) bookmarked: boolean | undefined;

	public changeBookmark(event: Event) {
		if (this.authService.checkAuth()?.token) {
			this.bookmarked = !this.bookmarked;
			if (this.restaurantId) {
				this.restaurantService.changeBookmark(this.restaurantId);
			}
			event.stopPropagation();
		} else {
			this.toastService.error('U must be authorized');
		}
	}
}
