import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewRestaurantComponent } from 'src/app/shared/components/create-new-restaurant/create-new-restaurant.component';
import { EditRestaurantComponent } from 'src/app/shared/components/edit-restaurant/edit-restaurant.component';
import { ProfileRestaurantsComponent } from 'src/app/shared/components/profile-restaurants/profile-restaurants.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
	},
	{
		path: 'restaurants',
		component: ProfileRestaurantsComponent,
	},
	{
		path: 'restaurants/create-new',
		component: CreateNewRestaurantComponent,
	},
	{
		path: 'restaurants/edit',
		component: EditRestaurantComponent,
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProfileRoutingModule {}
