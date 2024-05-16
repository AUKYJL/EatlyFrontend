import { inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanDeactivateFn } from '@angular/router';
import { FormService } from '../services/form.service';

export interface ICanDeactiveComponent {
	form?: FormGroup;
}

export const unsavedChangesGuard: CanDeactivateFn<ICanDeactiveComponent> = (
	component,
	currentRoute,
	currentState,
	nextState
) => {
	if (component.form?.dirty) {
		const form = inject(FormService);
		form.active = true;
		return form.canLeave$.asObservable();
	}
	return true;
};
