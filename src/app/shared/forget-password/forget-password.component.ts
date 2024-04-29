import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-forget-password',
	templateUrl: './forget-password.component.html',
	styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
	constructor(private authService: AuthService, private route: Router) {}

	@ViewChildren('control') controls!: QueryList<ElementRef<HTMLDivElement>>;
	@ViewChildren('input') inputs!: QueryList<ElementRef<HTMLInputElement>>;
	public errorMessage: string = '';
	public iconsStates: boolean[] = [false, false, false, false];
	public showPassword: boolean = false;
	public myForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});
	public onBlur(id: number) {
		if (!this.inputs.toArray()[id].nativeElement.value) {
			this.controls.toArray()[id].nativeElement.classList.remove('_active');
			this.iconsStates[id] = false;
		}
	}
	public activeInput(id: number) {
		this.inputs.toArray()[id].nativeElement.focus();
		this.controls.toArray()[id].nativeElement.classList.add('_active');
		this.iconsStates[id] = true;
	}

	public onSubmit() {}
}
