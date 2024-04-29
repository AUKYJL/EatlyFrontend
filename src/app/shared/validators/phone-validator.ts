import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PhoneValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
		const check = regExp.test(control.value);
		return !check ? { checkValue: { value: control.value } } : null;
	};
}
