import { Component, Input } from '@angular/core';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';
import { ICartProduct } from 'src/app/types/types';

@Component({
	selector: 'app-purchase-counter',
	templateUrl: './purchase-counter.component.html',
	styleUrls: ['./purchase-counter.component.scss'],
})
export class PurchaseCounterComponent {
	constructor(private sideCartService: SideCartMenuService) {}

	@Input({ required: true }) product!: ICartProduct;

	public stopPropagation(event: Event) {
		event.stopPropagation();
	}
	public changeProductCountBy(value: number) {
		this.sideCartService.changeCount(
			(this.product?.count ?? 0) + value,
			this.product!.dish.id
		);
	}
}
