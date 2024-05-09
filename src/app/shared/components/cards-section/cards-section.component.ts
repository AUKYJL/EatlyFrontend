import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-cards-section',
	templateUrl: './cards-section.component.html',
	styleUrls: ['./cards-section.component.scss'],
})
export class CardsSectionComponent {
	constructor(private router: Router) {}

	@Input({ required: true }) items: any;
	@Input({ required: true }) type!: ItemsWithPaginationTypes;
	@Input({ required: true }) viewAllRoute: string = '';
	@Input({ required: true }) title!: string;
	@Input() line: boolean = true;
	@Input() cols: string = '3';
	@Input() left: boolean = false;
	public types = ItemsWithPaginationTypes;

	public viewAll() {
		this.router.navigate([this.viewAllRoute]);
		window.scrollTo(0, 0);
	}
}
