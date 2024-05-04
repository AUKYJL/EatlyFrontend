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
			route: '',
		},
		{
			title: 'Cart',
			route: '',
		},
		{
			title: 'Purchases',
			route: '',
		},
		{
			title: 'Restaurants',
			route: '',
		},
		{
			title: 'Dishes',
			route: '',
		},
	];
	public isDropdownActive: boolean = false;

	public toggleDropdown() {
		this.isDropdownActive = !this.isDropdownActive;
	}
}
