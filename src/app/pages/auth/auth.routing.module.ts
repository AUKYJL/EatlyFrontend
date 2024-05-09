import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { unauthGuard } from 'src/app/guards/unauth.guard';
import { ForgetPasswordComponent } from 'src/app/shared/components/forget-password/forget-password.component';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { RegisterComponent } from 'src/app/shared/components/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		canActivate: [unauthGuard],
		children: [
			{ path: '', redirectTo: 'register', pathMatch: 'full' },
			{
				path: 'register',
				component: RegisterComponent,
			},
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'forget-password',
				component: ForgetPasswordComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
