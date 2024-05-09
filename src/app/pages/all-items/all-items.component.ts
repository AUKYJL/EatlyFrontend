import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-all-items',
	templateUrl: './all-items.component.html',
	styleUrls: ['./all-items.component.scss'],
})
export class AllItemsComponent {
	constructor(private route: ActivatedRoute) {}

	public types = ItemsWithPaginationTypes;
	public type!: ItemsWithPaginationTypes;
	ngOnInit(): void {
		this.isCorrectRoute();
	}

	private isCorrectRoute(): boolean {
		let isCorrect = false;
		this.route.paramMap.subscribe((params) => {
			let type = params.get('contentType');
			if (type) {
				if (
					Object.values(ItemsWithPaginationTypes).includes(
						type as ItemsWithPaginationTypes
					)
				) {
					this.type = type as ItemsWithPaginationTypes;
					isCorrect = true;
				}
			}
		});
		return isCorrect;
	}
}
