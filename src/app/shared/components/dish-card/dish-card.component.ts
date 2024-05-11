import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { IDish, IHoverTab } from 'src/app/types/types';

@Component({
	selector: 'app-dish-card',
	templateUrl: './dish-card.component.html',
	styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {
	constructor(private dishService: DishService, private router: Router) {}

	@Input({ required: true }) dish!: IDish;
	@Input() hasHover: boolean = false;
	public isLiked = false;
	public hoveredLeft: boolean = false;
	public hoveredRight: boolean = false;

	public tabs: IHoverTab[] = [
		{
			title: 'Edit',
			callback: () => {
				this.editDish();
			},
			colorRGBA: 'rgba(38, 201, 5, 0.5)',
			hoverColorRGBA: 'rgba(38, 201, 5, 0.7)',

			hovered: false,
		},
		{
			title: 'Delete',
			callback: () => {
				this.deleteDish();
			},
			colorRGBA: 'rgba(201, 5, 5, 0.5)',
			hoverColorRGBA: 'rgba(201, 5, 5, 0.7)',

			hovered: false,
		},
		{
			title: 'Check',
			callback: () => {
				this.goToDish();
			},
			colorRGBA: 'rgba(201, 67, 5, 0.5)',
			hoverColorRGBA: 'rgba(201, 67, 5, 0.7)',
			hovered: false,
		},
	];

	ngOnInit(): void {
		this.isLiked = this.dishService.getIsLiked(this.dish);
	}

	public editDish() {
		this.router.navigate([`/dishes/${this.dish!.id}`]);
		window.scrollTo(0, 0);
	}
	public deleteDish() {
		this.router.navigate([`/dishes/${this.dish!.id}`]);
		window.scrollTo(0, 0);
	}
	public goToDish() {
		this.router.navigate([`/dishes/${this.dish!.id}`]);
		window.scrollTo(0, 0);
	}
}
