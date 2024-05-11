import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { DishService } from 'src/app/services/dish.service';
import {
	DishCategories,
	DishGroups,
	DishTags,
	ICreateDish,
} from 'src/app/types/types';

@Component({
	selector: 'app-create-new-food',
	templateUrl: './create-new-food.component.html',
	styleUrls: ['./create-new-food.component.scss'],
})
export class CreateNewFoodComponent implements OnInit {
	constructor(
		private dishService: DishService,
		private toastService: ToastService,
		private route: ActivatedRoute
	) {}

	public tags = Object.values(DishTags);
	public dishGroups = Object.values(DishGroups);
	public dishCategories = Object.values(DishCategories);
	public errorMessage: string = '';
	public form = new FormGroup({
		restaurantId: new FormControl('', [Validators.required]),
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
			this.form.controls.restaurantId.setValue(id);
		});
	}

	public onSubmit() {
		if (this.form.valid) {
			this.dishService.createDish(this.form.value as ICreateDish).subscribe({
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
