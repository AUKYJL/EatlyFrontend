import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable()
export class PopupService {
	constructor() {}

	public form?: FormGroup | null;
	public reportForm = new FormGroup({
		message: new FormControl(''),
		warns: new FormArray([
			new FormGroup({
				title: new FormControl('swearing'),
				checked: new FormControl(false),
			}),
			new FormGroup({
				title: new FormControl('advertising'),
				checked: new FormControl(false),
			}),
			new FormGroup({
				title: new FormControl('etc'),
				checked: new FormControl(false),
			}),
			new FormGroup({
				title: new FormControl('etc'),
				checked: new FormControl(false),
			}),
			new FormGroup({
				title: new FormControl('etc'),
				checked: new FormControl(false),
			}),
		]),
	});

	public get warns() {
		return this.reportForm.controls['warns'] as FormArray;
	}

	public canLeave$ = new Subject<boolean>();
	public isAreYouSurePopupActive = false;
	public isReportPopupActive = false;
	public message: string = '';
	public actionYes = () => {};
	public actionNo = () => {};

	public clearActions() {
		this.actionYes = () => {};
		this.actionNo = () => {};
	}
}
