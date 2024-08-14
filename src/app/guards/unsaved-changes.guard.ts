import { inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanDeactivateFn } from '@angular/router';
import { PopupService } from '../services/popup.service';

export interface ICanDeactiveComponent {
	form?: FormGroup;
}

export const unsavedChangesGuard: CanDeactivateFn<ICanDeactiveComponent> = (
	component,
	currentRoute,
	currentState,
	nextState
) => {
	const popupService = inject(PopupService);

	if (popupService.form?.dirty) {
		popupService.isAreYouSurePopupActive = true;
		return popupService.canLeave$.asObservable();
	}
	popupService.message = '';
	popupService.form = null;
	return true;
};
