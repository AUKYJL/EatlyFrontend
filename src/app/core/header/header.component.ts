import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';
import { INavList } from 'src/app/types/types';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor(
		public authService: AuthService,
		public sideCartService: SideCartMenuService
	) {}
	ngOnInit(): void {}
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
	public scrollTop() {
		window.scrollTo(0, 0);
	}

	public getHeaderElement(): ElementRef<HTMLDivElement> {
		return this.header;
	}
}
