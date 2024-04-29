import { Component } from '@angular/core';
import { INavList } from 'src/app/types/types';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	public navList: INavList[] = [
		{
			title: 'Menu',
			route: '',
		},
		{
			title: 'Blog',
			route: '',
		},
		{
			title: 'Pricing',
			route: '',
		},
		{
			title: 'Contact',
			route: '',
		},
	];
}
