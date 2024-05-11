import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { ItemsWithPaginationTypes } from 'src/app/types/types';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements AfterViewInit {
	constructor(private renderer: Renderer2) {}

	@Input({ required: true }) items: any;
	@Input({ required: true }) type!: ItemsWithPaginationTypes;
	@Input({ required: true }) cols: number = 3;
	@Input() hasHover: boolean = false;

	public types = ItemsWithPaginationTypes;

	@ViewChild('cards') cards!: ElementRef<HTMLDivElement>;

	ngAfterViewInit(): void {
		// this.renderer.setStyle(
		// 	this.cards.nativeElement,
		// 	'height',
		// 	`${this.cards.nativeElement.offsetHeight}px`
		// );
	}
}
