import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { FormService } from './services/form.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
	constructor(
		public formService: FormService,
		private renderer: Renderer2,
		private cdr: ChangeDetectorRef
	) {}

	@ViewChild('main') main!: ElementRef<HTMLDivElement>;
	@ViewChild(HeaderComponent) header!: HeaderComponent;

	ngAfterViewInit(): void {
		this.cdr.detectChanges();
		const headerElement = this.header.getHeaderElement();
		console.log(headerElement.nativeElement.offsetHeight);
		console.log(this.main.nativeElement);

		this.renderer.setStyle(
			this.main.nativeElement,
			'margin-top',
			`${headerElement.nativeElement.offsetHeight}px`
		);
	}
}
