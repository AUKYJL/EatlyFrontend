import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-aditional-info',
	templateUrl: './card-aditional-info.component.html',
	styleUrls: ['./card-aditional-info.component.scss'],
})
export class CardAditionalInfoComponent {
	@Input({ required: true }) time?: string;
	@Input({ required: true }) rating?: number;
	@Input() row: boolean = false;
}
