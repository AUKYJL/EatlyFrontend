import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

export interface warn {
	title: string;
	checked: boolean;
}

@Component({
	selector: 'app-report-popup',
	templateUrl: './report-popup.component.html',
	styleUrls: ['./report-popup.component.scss'],
})
export class ReportPopupComponent {
	private initFormValue: any;
	constructor(public popupService: PopupService) {
		this.initFormValue = this.popupService.reportForm.value;
	}

	public closePopup() {
		this.popupService.isReportPopupActive = false;

		this.popupService.reportForm.reset(this.initFormValue);
	}
}
