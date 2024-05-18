import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';
import { INavList } from 'src/app/types/types';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(
		public authService: AuthService,
		public sideCartService: SideCartMenuService
	) {}
	@ViewChild('header') header!: ElementRef<HTMLDivElement>;
	public navList: INavList[] = [
		{
			title: 'Home',
			route: '/',
		},
		{
			title: 'Menu',
			route: 'menu',
		},
		{
			title: 'Blog',
			route: 'blog',
		},
		{
			title: 'Pricing',
			route: 'pricing',
		},
		{
			title: 'Contact',
			route: 'contact',
		},
	];

	public getHeaderElement(): ElementRef<HTMLDivElement> {
		return this.header;
	}
}
