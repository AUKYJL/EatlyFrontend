import { PlatformLocation } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
	selector: 'app-confirm-leave',
	templateUrl: './confirm-leave.component.html',
	styleUrls: ['./confirm-leave.component.scss'],
})
export class ConfirmLeaveComponent {
	constructor(private formService: FormService, location: PlatformLocation) {
		location.onPopState(() => {
			//prevent popstate
			history.pushState(null, '', window.location.href);
		});
	}

	@Input({ required: true }) form?: FormGroup;
	@Input({ required: true }) active!: boolean;

	@HostListener('window:beforeunload', ['$event'])
	onBeforeUnload(event: Event) {
		if (this.formService.form?.dirty) {
			console.log('только на эдит пейдже спрашивает можно ли уйти или нет');
			return false;
		}
		return null;
	}

	public action(value: boolean) {
		this.formService.active = false;
		this.formService.canLeave$.next(value);
	}
}
