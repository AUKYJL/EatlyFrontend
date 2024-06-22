import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';
import { INavList } from 'src/app/types/types';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
	constructor(
		public authService: AuthService,
		public sideCartService: SideCartMenuService,
		private sharedService: SharedService
	) {}

	@ViewChild('header') header!: ElementRef<HTMLDivElement>;

	ngAfterViewInit(): void {
		this.sharedService.header = this.header;
	}
	ngOnInit(): void {}
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
}
