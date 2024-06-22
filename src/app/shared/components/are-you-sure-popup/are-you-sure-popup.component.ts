import { PlatformLocation } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
	selector: 'app-are-you-sure-popup',
	templateUrl: './are-you-sure-popup.component.html',
	styleUrls: ['./are-you-sure-popup.component.scss'],
})
export class AreYouSurePopupComponent {
	constructor(public popupService: PopupService, location: PlatformLocation) {
		location.onPopState(() => {
			//prevent popstate
			history.pushState(null, '', window.location.href);
		});
	}

	// @Input({ required: true }) actionYes!: () => void;
	// @Input({ required: true }) actionNo!: () => void;
	// @Input({ required: true }) message!: string;

	// @Input({ required: true }) form?: FormGroup;
	// @Input({ required: true }) active!: boolean;

	//TODO: придумать как передавать form (то из-за чего вызывается или не вызывается r u sure попап) потому что он наверное может быть и не формой

	@HostListener('window:beforeunload', ['$event'])
	onBeforeUnload(event: Event) {
		if (this.popupService.form?.dirty) {
			return false;
		}
		return null;
	}

	public action(value: boolean) {
		this.popupService.isAreYouSurePopupActive = false;
		this.popupService.canLeave$.next(value);
		if (value) {
			this.popupService.actionYes();
		} else {
			this.popupService.actionNo();
		}
		this.popupService.clearActions();
	}
}
