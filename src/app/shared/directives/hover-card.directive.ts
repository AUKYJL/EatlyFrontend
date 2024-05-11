import {
	Directive,
	ElementRef,
	HostListener,
	Input,
	OnInit,
	Renderer2,
} from '@angular/core';

@Directive({
	selector: '[HoverCard]',
})
export class HoverCardDirective implements OnInit {
	constructor(private el: ElementRef, private renderer: Renderer2) {}

	@Input({ required: true }) defaultColor!: string;
	@Input({ required: true }) hoverColor!: string;

	@HostListener('mouseenter') onMouseEnter() {
		this.renderer.setStyle(
			this.el.nativeElement,
			'background-color',
			this.hoverColor
		);
	}
	@HostListener('mouseout') onMouseOut() {
		this.setDefault();
	}

	private setDefault() {
		this.renderer.setStyle(
			this.el.nativeElement,
			'background-color',
			this.defaultColor
		);
	}
	ngOnInit(): void {
		this.setDefault();
	}
}
