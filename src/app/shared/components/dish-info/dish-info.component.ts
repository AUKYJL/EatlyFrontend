import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { IDish, ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-dish-info',
	templateUrl: './dish-info.component.html',
	styleUrls: ['./dish-info.component.scss'],
})
export class DishInfoComponent {
	constructor(
		private route: ActivatedRoute,
		private dishService: DishService
	) {}
	public dish?: IDish;
	public isLiked: boolean = false;
	public types = ItemsWithPaginationTypes;

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			let id = params.get('id');
			if (id) {
				this.dishService.getDishById(+id).subscribe((d) => {
					this.dish = d;

					this.isLiked = this.dishService.getIsLiked(d);
				});
			}
		});
	}
}
