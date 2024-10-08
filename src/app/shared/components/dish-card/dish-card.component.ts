import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DishService } from 'src/app/services/dish.service';
import { ItemsService } from 'src/app/services/items.service';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';
import { ICartProduct, IDish, IHoverTab } from 'src/app/types/types';

@Component({
	selector: 'app-dish-card',
	templateUrl: './dish-card.component.html',
	styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit, OnDestroy {
	constructor(
		private dishService: DishService,
		private router: Router,
		private itemsService: ItemsService,
		private sideCartService: SideCartMenuService
	) {}

	@Input({ required: true }) dish!: IDish;
	@Input() hasHover: boolean = false;
	private destroy$ = new Subject<void>();
	public product?: ICartProduct;
	public isLiked = false;
	public hoveredLeft: boolean = false;
	public hoveredRight: boolean = false;

	ngOnInit(): void {
		this.isLiked = this.dishService.getIsLiked(this.dish);
		this.sideCartService.products$
			.pipe(takeUntil(this.destroy$))
			.subscribe((p) => {
				this.getCorrectProduct(p);
			});
	}
	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
	public getCorrectProduct(products: ICartProduct[]) {
		this.product = products.filter((prod) => prod.dish.id === this.dish.id)[0];
	}

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

	public editDish() {
		this.router.navigate([`/profile/dishes/edit-food/${this.dish.id}`]);
		window.scrollTo(0, 0);
	}
	public deleteDish() {
		this.dishService.deleteDish(this.dish.id).subscribe(() => {
			this.itemsService.deletedItem.emit();
		});
	}
	public goToDish() {
		this.router.navigate([`/dishes/${this.dish!.id}`]);
		window.scrollTo(0, 0);
	}

	public stopPropagation(event: Event) {
		event.stopPropagation();
	}

	public changeProductCountBy(value: number) {
		this.sideCartService.changeCount(
			(this.product?.count ?? 0) + value,
			this.dish.id
		);
	}
}
