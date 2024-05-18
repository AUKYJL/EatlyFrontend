import { Component, Input } from '@angular/core';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';
import { ICartProduct } from 'src/app/types/types';

@Component({
	selector: 'app-side-cart-card',
	templateUrl: './side-cart-card.component.html',
	styleUrls: ['./side-cart-card.component.scss'],
})
export class SideCartCardComponent {
	constructor(private sideCartService: SideCartMenuService) {}

	@Input({ required: true }) product!: ICartProduct;

	public handleCounterChange(value: number) {
		this.changeProductCountBy(value);
	}

	public changeProductCountBy(value: number) {
		this.sideCartService.changeCount(
			(this.product?.count ?? 0) + value,
			this.product.dish.id
		);
	}
	public removeProduct() {
		this.sideCartService.changeCount(0, this.product.dish.id);
	}
}
