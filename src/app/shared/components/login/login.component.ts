import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUserReg } from 'src/app/types/types';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(private authService: AuthService, private route: Router) {}

	@ViewChildren('control') controls!: QueryList<ElementRef<HTMLDivElement>>;
	@ViewChildren('input') inputs!: QueryList<ElementRef<HTMLInputElement>>;
	public errorMessage: string = '';
	public iconsStates: boolean[] = [false, false, false, false];
	public showPassword: boolean = false;
	public myForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
		]),
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

	public onSubmit() {
		this.authService.login(this.myForm.value as IUserReg).subscribe({
			next: (data) => {
				this.route.navigate(['../../']);
				window.scrollTo(0, 0);
				localStorage.setItem(environment.loggedInUser, JSON.stringify(data));
				this.authService.init();
			},
			error: (err) => {
				this.errorMessage = err.error.message;
			},
		});
	}
}
