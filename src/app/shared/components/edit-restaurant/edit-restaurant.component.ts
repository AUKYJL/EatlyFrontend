import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastService } from 'angular-toastify';
import { AuthService } from 'src/app/services/auth.service';
import { PopupService } from 'src/app/services/popup.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import {
	IRestaurant,
	ItemsWithPaginationTypes,
	RestaurantTags,
} from 'src/app/types/types';
import { editorConfig } from '../../consts/consts';

@Component({
	selector: 'app-edit-restaurant',
	templateUrl: './edit-restaurant.component.html',
	styleUrls: ['./edit-restaurant.component.scss'],
})
export class EditRestaurantComponent implements OnInit {
	constructor(
		private restaurantService: RestaurantService,
		private toastService: ToastService,
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router,
		private popupService: PopupService
	) {}

	public config: AngularEditorConfig = editorConfig;
	public errorMessage: string = '';
	public types = ItemsWithPaginationTypes;
	public tags = Object.values(RestaurantTags);
	public restaurant?: IRestaurant;
	public form = new FormGroup({
		title: new FormControl('', [Validators.required]),
		tag: new FormControl('', [Validators.required]),
		time: new FormControl('', [Validators.required]),
		adress: new FormControl('', [Validators.required]),
		urlToImg: new FormControl('', [Validators.required]),
		desc: new FormControl('', [Validators.required]),
	});
	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const id = params.get('id');
			this.restaurantService.getRestaurantById(+id!).subscribe((r) => {
				if (!r || r.owner.id !== this.authService.checkAuth()?.id) {
					this.router.navigate(['/']);
				}

				this.restaurant = r;
				this.form.controls.title.setValue(r.title);
				this.form.controls.tag.setValue(r.tag);
				this.form.controls.time.setValue(r.time);
				this.form.controls.adress.setValue(r.adress);
				this.form.controls.urlToImg.setValue(r.urlToImg);
				this.form.controls.desc.setValue(r.desc);

				this.popupService.form = this.form;
				this.popupService.message = 'You have unsaved changes';
			});
		});
	}
	public goToCreateDish() {
		this.router.navigate([
			`profile/restaurants/${this.restaurant!.id}/add-new-food`,
		]);
		window.scrollTo(0, 0);
	}
	public onSubmit() {
		// if (this.form!.valid) {
		// 	this.restaurantService
		// 		.editRestaurant({
		// 			id: this.restaurantService.editingRestaurant!.id,
		// 			...this.form!.value,
		// 		} as IUpdateRestaurant)
		// 		.subscribe({
		// 			next: () => {
		// 				this.toastService.success(
		// 					`${this.form!.controls.title.value} successfully edited`
		// 				);
		// 			},
		// 			error: (err) => {
		// 				this.toastService.error(err.error.message);
		// 			},
		// 		});
		// } else {
		// 	this.errorMessage = 'Please fill in all the fields';
		// }
	}
}
