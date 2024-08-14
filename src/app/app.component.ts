import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { PopupService } from './services/popup.service';
import { SharedService } from './services/shared.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
	constructor(
		public popupService: PopupService,
		private renderer: Renderer2,
		private cdr: ChangeDetectorRef,
		private sharedService: SharedService
	) {}

	@ViewChild('main') main!: ElementRef<HTMLDivElement>;

	ngAfterViewInit(): void {
		this.cdr.detectChanges();

		this.renderer.setStyle(
			this.main.nativeElement,
			'margin-top',
			`${this.sharedService.header.nativeElement.offsetHeight + 20}px`
		);
	}
}
