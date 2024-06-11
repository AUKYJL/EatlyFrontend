import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/guards/auth.guard';
import { unsavedChangesGuard } from 'src/app/guards/unsaved-changes.guard';
import { CreateNewFoodComponent } from 'src/app/shared/components/create-new-food/create-new-food.component';
import { CreateNewRestaurantComponent } from 'src/app/shared/components/create-new-restaurant/create-new-restaurant.component';
import { EditDishComponent } from 'src/app/shared/components/edit-dish/edit-dish.component';
import { EditRestaurantComponent } from 'src/app/shared/components/edit-restaurant/edit-restaurant.component';
import { ProfileRestaurantsComponent } from 'src/app/shared/components/profile-restaurants/profile-restaurants.component';
import { PurchasesComponent } from 'src/app/shared/components/purchases/purchases.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
	},
	{
		path: 'restaurants/:id/add-new-food',
		component: CreateNewFoodComponent,
	},
	{
		path: 'dishes/edit-food/:id',
		component: EditDishComponent,
		canActivate: [authGuard],
		canDeactivate: [unsavedChangesGuard],
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
		path: 'restaurants/:id/edit',
		component: EditRestaurantComponent,
		canActivate: [authGuard],
		canDeactivate: [unsavedChangesGuard],
	},
	{
		path: 'purchases',
		component: PurchasesComponent,
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
