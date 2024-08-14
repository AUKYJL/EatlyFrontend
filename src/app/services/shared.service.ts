import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class SharedService {
	constructor() {}

	public header!: ElementRef<HTMLDivElement>;
}
