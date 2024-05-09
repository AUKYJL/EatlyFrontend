import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastService } from 'angular-toastify';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ICreateRestaurant, RestaurantTags } from 'src/app/types/types';
import { editorConfig } from '../../consts/consts';
@Component({
	selector: 'app-create-new-restaurant',
	templateUrl: './create-new-restaurant.component.html',
	styleUrls: ['./create-new-restaurant.component.scss'],
})
export class CreateNewRestaurantComponent {
	constructor(
		private restaurantService: RestaurantService,
		private toastService: ToastService
	) {}

	public errorMessage: string = '';
	public tags = Object.values(RestaurantTags);
	public config: AngularEditorConfig = editorConfig;
	public form = new FormGroup({
		title: new FormControl('', [Validators.required]),
		tag: new FormControl('', [Validators.required]),
		time: new FormControl('', [Validators.required]),
		adress: new FormControl('', [Validators.required]),
		urlToImg: new FormControl('', [Validators.required]),
		desc: new FormControl('', [Validators.required]),
	});
	public onSubmit() {
		if (this.form.valid) {
			this.restaurantService
				.createNewRestaurant(this.form.value as ICreateRestaurant)
				.subscribe({
					next: () => {
						this.toastService.success(
							`${this.form.controls.title.value} successfully created`
						);
					},
					error: (err) => {
						this.toastService.error(err.error.message);
					},
				});
		} else {
			this.errorMessage = 'Please fill in all the fields';
		}
	}
}
