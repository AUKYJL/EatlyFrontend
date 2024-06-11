import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideCartMenuService } from 'src/app/services/side-cart-menu.service';

@Component({
	selector: 'app-purchases',
	templateUrl: './purchases.component.html',
	styleUrls: ['./purchases.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchasesComponent {
	public deliveryPrice = 4.5;
	constructor(public sideCartService: SideCartMenuService) {}
}
