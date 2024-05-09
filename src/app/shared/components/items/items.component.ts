import { Component, Input } from '@angular/core';
import { ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
	@Input({ required: true }) items: any;
	@Input({ required: true }) type!: ItemsWithPaginationTypes;
	@Input({ required: true }) cols: number = 3;

	public types = ItemsWithPaginationTypes;
}
