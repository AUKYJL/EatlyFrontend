import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthModule } from './pages/auth/auth.module';
import { HomeComponent } from './pages/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { httpInterceptorProviders } from './pages/auth/auth.interceptor';
import { AuthService } from './services/auth.service';
import { RestaurantService } from './services/restaurant.service';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoModule } from './shared/components/logo/logo.module';
import { PopupComponent } from './shared/components/popup/popup.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { RestarauntCardsSectionComponent } from './shared/components/restaraunt-cards-section/restaraunt-cards-section.component';
import { RestaurantCardComponent } from './shared/components/restaurant-card/restaurant-card.component';
import { ItemsWithPaginationComponent } from './shared/components/items-with-pagination/items-with-pagination.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		ForgetPasswordComponent,
		RestaurantCardComponent,
		RestarauntCardsSectionComponent,
		PopupComponent,
  ItemsWithPaginationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule,
		CommonModule,
		LogoModule,
		ReactiveFormsModule,
		AngularToastifyModule,
	],
	providers: [
		AuthService,
		RestaurantService,
		httpInterceptorProviders,
		ToastService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
