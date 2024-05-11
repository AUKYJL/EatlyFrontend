import { Component, Input } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { DishService } from 'src/app/services/dish.service';

@Component({
	selector: 'app-liked',
	templateUrl: './liked.component.html',
	styleUrls: ['./liked.component.scss'],
})
export class LikedComponent {
	constructor(
		private authService: AuthService,
		private toastService: ToastService,
		private dishService: DishService
	) {}

	@Input({ required: true }) dishId: number | undefined;
	@Input({ required: true }) isLiked: boolean | undefined;

	public changeLiked(event: Event) {
		if (this.authService.checkAuth()?.token) {
			this.dishService.changeLiked(this.dishId!);
			this.isLiked = !this.isLiked;
			event.stopPropagation();
		} else {
			this.toastService.error('U must be authorized');
		}
	}
}
