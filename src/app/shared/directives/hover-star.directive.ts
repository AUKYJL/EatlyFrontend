import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	OnInit,
	Output,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[HoverStar]',
})
export class HoverStarDirective implements OnInit {
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@Input({ required: true }) starNumber!: number;
	@Output() newStarNumber = new EventEmitter();

	private startState: 'regular' | 'filled' = 'regular';

	@HostListener('mouseenter') onMouseEnter() {
		this.renderer.removeClass(this.el.nativeElement, '_icon-regular-star');
		this.renderer.addClass(this.el.nativeElement, '_icon-star');
		this.newStarNumber.emit(this.starNumber);
	}
	@HostListener('mouseout') onMouseOut() {
		this.renderer.removeClass(this.el.nativeElement, '_icon-star');
		this.renderer.removeClass(this.el.nativeElement, '_icon-regular-star');
		this.newStarNumber.emit(0);
		this.setStartState();
	}

	private setStartState() {
		this.renderer.addClass(
			this.el.nativeElement,
			this.startState == 'regular' ? '_icon-regular-star' : '_icon-star'
		);
	}

	ngOnInit(): void {
		this.startState = (
			this.el.nativeElement as HTMLSpanElement
		).classList.contains('_icon-star')
			? 'filled'
			: 'regular';
	}
}
