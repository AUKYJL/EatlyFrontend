import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-get-discount',
	templateUrl: './get-discount.component.html',
	styleUrls: ['./get-discount.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetDiscountComponent {}
