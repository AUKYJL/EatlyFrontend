import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { DishService } from 'src/app/services/dish.service';
import { PopupService } from 'src/app/services/popup.service';
import {
	DishCategories,
	DishGroups,
	DishTags,
	IUpdateDish,
} from 'src/app/types/types';

@Component({
	selector: 'app-edit-dish',
	templateUrl: './edit-dish.component.html',
	styleUrls: ['./edit-dish.component.scss'],
})
export class EditDishComponent {
	constructor(
		private dishService: DishService,
		private toastService: ToastService,
		private route: ActivatedRoute,
		private popupService: PopupService
	) {}

	public tags = Object.values(DishTags);
	public dishGroups = Object.values(DishGroups);
	public dishCategories = Object.values(DishCategories);
	public errorMessage: string = '';
	public form = new FormGroup({
		id: new FormControl('', [Validators.required]),
		title: new FormControl('', [Validators.required]),
		price: new FormControl('', [Validators.required]),
		timeToCook: new FormControl('', [Validators.required]),
		urlToImg: new FormControl('', [Validators.required]),
		tag: new FormControl('', [Validators.required]),
		dishGroup: new FormControl('', [Validators.required]),
		dishCategory: new FormControl('', [Validators.required]),
	});

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			let id = params.get('id');
			this.dishService.getDishById(+id!).subscribe((d) => {
				this.form.controls.id.setValue(d.id.toString());
				this.form.controls.title.setValue(d.title);
				this.form.controls.price.setValue(d.price.toString());
				this.form.controls.timeToCook.setValue(d.timeToCook);
				this.form.controls.urlToImg.setValue(d.urlToImg);
				this.form.controls.tag.setValue(d.tag);
				this.form.controls.dishGroup.setValue(d.dishGroup);
				this.form.controls.dishCategory.setValue(d.dishCategory);

				this.popupService.form = this.form;
				this.popupService.message = 'You have unsaved changes';
			});
		});
	}

	public onSubmit() {
		if (this.form.valid) {
			this.dishService.editDish(this.form.value as IUpdateDish).subscribe({
				next: (d) => {
					console.log(d);

					this.toastService.success(
						`${this.form.controls.title.value} successfully saved`
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
