import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { INavList } from 'src/app/types/types';

@Component({
	selector: 'app-user-auth-field',
	templateUrl: './user-auth-field.component.html',
	styleUrls: ['./user-auth-field.component.scss'],
})
export class UserAuthFieldComponent {
	constructor(public authService: AuthService) {}
	@ViewChild('dropdown') dropdown!: ElementRef<HTMLDivElement>;
	public dropDownList: INavList[] = [
		{
			title: 'Profile',
			route: 'profile',
		},
		{
			title: 'Cart',
			route: 'profile/cart',
		},
		{
			title: 'Purchases',
			route: 'profile/purchases',
		},
		{
			title: 'Restaurants',
			route: 'profile/restaurants',
		},
		{
			title: 'Dishes',
			route: 'profile/dishes',
		},
	];
	public isDropdownActive: boolean = false;

	public toggleDropdown() {
		this.isDropdownActive = !this.isDropdownActive;
	}
}
