import { Component, Renderer2 } from '@angular/core';
import { IfaqItem } from 'src/app/types/types';

@Component({
	selector: 'app-faq',
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
	constructor(private renderer: Renderer2) {}
	public faqList: IfaqItem[] = [
		{
			question: `How long does delivery take?`,
			answer: `You Can Get Information By Contacting Our Support Team Have
		24/7 Service.What’s The Difference Between Free And Paid Plan
		?`,
			active: false,
		},
		{
			question: `How Does It Work ?`,
			answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?`,
			active: false,
		},
		{
			question: `How does your food delivery service work?`,
			answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?`,
			active: false,
		},
		{
			question: `What payment options do you accept?`,
			answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?`,
			active: false,
		},
		{
			question: `Do you offer discounts or promotions?`,
			answer: `You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?`,
			active: false,
		},
	];
	public toggleSpoller(
		bodyEl: HTMLDivElement,
		parEl: HTMLParagraphElement,
		faq: IfaqItem
	) {
		const h = parEl.offsetHeight;
		faq.active = !faq.active;

		if (faq.active) {
			this.renderer.setStyle(bodyEl, 'height', `${h}px`);
		} else {
			this.renderer.setStyle(bodyEl, 'height', 0);
		}
	}
}
