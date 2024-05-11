import {
	AfterViewInit,
	Component,
	ElementRef,
	Renderer2,
	ViewChild,
	ViewEncapsulation,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
	selector: 'app-auth-swiper',
	templateUrl: './auth-swiper.component.html',
	styleUrls: ['./auth-swiper.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AuthSwiperComponent implements AfterViewInit {
	constructor(private renderer: Renderer2) {}
	@ViewChild('slider') slider!: ElementRef<SwiperContainer>;
	@ViewChild('pagination') pagination!: ElementRef<HTMLDivElement>;

	public sliderParams = {
		// effect: 'fade',
		// autoplay: {
		// 	delay: 500,
		// 	disableOnInteraction: false,
		// },
		observer: true,
		observeParents: true,
		slidesPerView: 1,

		spaceBetween: '20px',
		// autoHeight: true,
		// speed: 800,
		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		// pagination: true,
		pagination: {
			el: '.pagination',
			clickable: true,
		},
		// Arrows
		// navigation: {
		// 	nextEl: '.about__more .more__item_next',
		// 	prevEl: '.about__more .more__item_prev',
		// },
		/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
		on: {
			init() {},
		},
		// And if we need scrollbar
		//scrollbar: {
		//	el: '.swiper-scrollbar',
	};

	ngAfterViewInit(): void {
		Object.assign(this.slider.nativeElement, this.sliderParams);
		this.slider.nativeElement.initialize();
	}
}
