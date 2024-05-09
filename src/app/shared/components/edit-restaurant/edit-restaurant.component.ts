import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastService } from 'angular-toastify';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { IUpdateRestaurant, RestaurantTags } from 'src/app/types/types';
import { editorConfig } from '../../consts/consts';

@Component({
	selector: 'app-edit-restaurant',
	templateUrl: './edit-restaurant.component.html',
	styleUrls: ['./edit-restaurant.component.scss'],
})
export class EditRestaurantComponent {
	constructor(
		private restaurantService: RestaurantService,
		private toastService: ToastService
	) {}

	public config: AngularEditorConfig = editorConfig;
	public errorMessage: string = '';
	public tags = Object.values(RestaurantTags);
	private rest = this.restaurantService.editingRestaurant;
	public form = new FormGroup({
		title: new FormControl(this.rest?.title, [Validators.required]),
		tag: new FormControl(this.rest?.tag, [Validators.required]),
		time: new FormControl(this.rest?.time, [Validators.required]),
		adress: new FormControl(this.rest?.adress, [Validators.required]),
		urlToImg: new FormControl(this.rest?.urlToImg, [Validators.required]),
		desc: new FormControl(this.rest?.desc, [Validators.required]),
	});

	public onSubmit() {
		if (this.form.valid) {
			this.restaurantService
				.editRestaurant({
					id: this.restaurantService.editingRestaurant!.id,
					...this.form.value,
				} as IUpdateRestaurant)
				.subscribe({
					next: () => {
						this.toastService.success(
							`${this.form.controls.title.value} successfully edited`
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
