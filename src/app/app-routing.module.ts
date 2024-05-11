import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { AllItemsComponent } from './pages/all-items/all-items.component';
import { HomeComponent } from './pages/home/home.component';
import { DishInfoComponent } from './shared/components/dish-info/dish-info.component';
import { RestaurantInfoComponent } from './shared/components/restaurant-info/restaurant-info.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'auth',
		loadChildren: () =>
			import('./pages/auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: 'restaurants/:id',
		component: RestaurantInfoComponent,
	},
	{
		path: 'items/:contentType',
		component: AllItemsComponent,
	},
	{
		path: 'profile',
		canActivate: [authGuard],
		loadChildren: () =>
			import('./pages/profile/profile.module').then((m) => m.ProfileModule),
	},
	{
		path: 'dishes/:id',
		component: DishInfoComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
