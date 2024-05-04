import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { DishService } from 'src/app/services/dish.service';
import { IDish } from 'src/app/types/types';

@Component({
	selector: 'app-dish-card',
	templateUrl: './dish-card.component.html',
	styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private dishService: DishService,
		private toastService: ToastService
	) {}
	ngOnInit(): void {
		this.isLiked = this.getIsLiked();
	}
	@Input({ required: true }) dish: IDish | null = null;
	public isLiked = false;

	public getIsLiked() {
		const userId = this.authService.user?.id;
		if (userId) {
			const users = this.dish?.usersLikedFood;

			if (!users) return false;
			for (let i = 0; i < users.length; i++) {
				const { id } = users[i];

				if (id === userId) return true;
			}
		}
		return false;
	}
	public changeLiked() {
		if (this.authService.checkAuth()?.token) {
			this.dishService.changeLiked(this.dish!.id);
			this.isLiked = !this.isLiked;
		} else {
			this.toastService.error('U must be authorized');
		}
	}
}
