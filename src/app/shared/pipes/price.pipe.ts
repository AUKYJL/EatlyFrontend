import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'price',
})
export class PricePipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	transform(value: number, ...args: unknown[]) {
		const v = value.toString().split('.');
		if (v[1]) {
			const htmlString = `$${v[0]}.<span>${v[1]}</span>`;
			return this.sanitizer.sanitize(SecurityContext.HTML, htmlString);
		}
		return `$${value}`;
	}
}
