import {
	AfterViewInit,
	Component,
	ElementRef,
	Input,
	OnInit,
	QueryList,
	Renderer2,
	ViewChildren,
} from '@angular/core';
import { IHoverTab } from 'src/app/types/types';

@Component({
	selector: 'app-hover-card',
	templateUrl: './hover-card.component.html',
	styleUrls: ['./hover-card.component.scss'],
})
export class HoverCardComponent implements OnInit, AfterViewInit {
	constructor(private renderer: Renderer2) {}
	@Input({ required: true }) tabs!: IHoverTab[];

	@ViewChildren('hoverCard') hoverCards!: QueryList<ElementRef>;

	ngOnInit(): void {}
	ngAfterViewInit(): void {
		if (this.hoverCards.length % 2 !== 0) {
			this.renderer.setStyle(
				this.hoverCards.get(this.hoverCards.length - 1)?.nativeElement,
				'grid-column',
				'span 2'
			);
		}
	}
}
