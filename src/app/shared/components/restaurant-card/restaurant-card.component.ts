import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { ItemsService } from 'src/app/services/items.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IHoverTab, IRestaurant, RestaurantTags } from 'src/app/types/types';

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
		private router: Router,
		private itemsService: ItemsService
	) {}

	@Input({ required: true }) restaurant!: IRestaurant;
	@Input() hasHover: boolean = false;

	public restaurantTags = RestaurantTags;
	public bookmarked: boolean = false;
	public hoveredLeft: boolean = false;
	public hoveredRight: boolean = false;

	public tabs: IHoverTab[] = [
		{
			title: 'Edit',
			callback: () => {
				this.editRestaurant();
			},
			colorRGBA: 'rgba(38, 201, 5, 0.5)',
			hoverColorRGBA: 'rgba(38, 201, 5, 0.7)',
			icons: ['_icon-filled-pen', '_icon-pen'],
			hovered: false,
		},
		{
			title: 'Delete',
			callback: () => {
				this.deleteRestaurant();
			},
			colorRGBA: 'rgba(201, 5, 5, 0.5)',
			hoverColorRGBA: 'rgba(201, 5, 5, 0.7)',
			icons: ['_icon-filled-trash', '_icon-trash'],
			hovered: false,
		},
		{
			title: 'Add Food',
			callback: () => {
				this.addFood();
			},
			colorRGBA: 'rgba(4, 94, 136, 0.5)',
			hoverColorRGBA: 'rgba(4, 94, 136, 0.7)',
			hovered: false,
		},
		{
			title: 'Check',
			callback: () => {
				this.goToRestaurant();
			},
			colorRGBA: 'rgba(201, 67, 5, 0.5)',
			hoverColorRGBA: 'rgba(201, 67, 5, 0.7)',
			hovered: false,
		},
	];

	ngOnInit(): void {
		this.bookmarked = this.restaurantService.getBookmarked(this.restaurant);
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
			this.itemsService.deletedItem.emit();
		});
	}
	public editRestaurant() {
		this.restaurantService.editingRestaurant = this.restaurant;
		this.router.navigate([`/profile/restaurants/${this.restaurant.id}/edit`]);
	}
	public addFood() {
		this.router.navigate([
			`/profile/restaurants/${this.restaurant.id}/add-new-food`,
		]);
	}

	public goToRestaurant() {
		this.router.navigate([`/restaurants/${this.restaurant.id}`]);
		window.scrollTo(0, 0);
	}
}
