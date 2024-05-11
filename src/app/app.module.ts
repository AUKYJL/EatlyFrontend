import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthModule } from './pages/auth/auth.module';
import { HomeComponent } from './pages/home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

import { register } from 'swiper/element/bundle';
import { AllItemsComponent } from './pages/all-items/all-items.component';
import { httpInterceptorProviders } from './pages/auth/auth.interceptor';
import { AuthService } from './services/auth.service';
import { DishService } from './services/dish.service';
import { ItemsService } from './services/items.service';
import { RestaurantService } from './services/restaurant.service';
import { BookmarkComponent } from './shared/components/bookmark/bookmark.component';
import { CardAditionalInfoComponent } from './shared/components/card-aditional-info/card-aditional-info.component';
import { CardsSectionComponent } from './shared/components/cards-section/cards-section.component';
import { CreateNewFoodComponent } from './shared/components/create-new-food/create-new-food.component';
import { CreateNewRestaurantComponent } from './shared/components/create-new-restaurant/create-new-restaurant.component';
import { DishCardComponent } from './shared/components/dish-card/dish-card.component';
import { EditRestaurantComponent } from './shared/components/edit-restaurant/edit-restaurant.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { ItemsWithPaginationComponent } from './shared/components/items-with-pagination/items-with-pagination.component';
import { ItemsComponent } from './shared/components/items/items.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoModule } from './shared/components/logo/logo.module';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { PopupComponent } from './shared/components/popup/popup.component';
import { ProfileRestaurantsComponent } from './shared/components/profile-restaurants/profile-restaurants.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { RestaurantCardComponent } from './shared/components/restaurant-card/restaurant-card.component';
import { RestaurantInfoComponent } from './shared/components/restaurant-info/restaurant-info.component';
import { UserAuthFieldComponent } from './shared/components/user-auth-field/user-auth-field.component';
import { PricePipe } from './shared/pipes/price.pipe';
import { DishInfoComponent } from './shared/components/dish-info/dish-info.component';
import { LikedComponent } from './shared/components/liked/liked.component';
import { HoverCardComponent } from './shared/components/hover-card/hover-card.component';
import { HoverCardDirective } from './shared/directives/hover-card.directive';

register();
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
		PopupComponent,
		ItemsWithPaginationComponent,
		DishCardComponent,
		PricePipe,
		UserAuthFieldComponent,
		CreateNewRestaurantComponent,
		ProfileRestaurantsComponent,
		PaginationComponent,
		ItemsComponent,
		CardsSectionComponent,
		AllItemsComponent,
		EditRestaurantComponent,
		RestaurantInfoComponent,
		BookmarkComponent,
		CardAditionalInfoComponent,
		FaqComponent,

		CreateNewFoodComponent,
    DishInfoComponent,
    LikedComponent,
    HoverCardComponent,
    HoverCardDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule,
		CommonModule,
		LogoModule,
		ReactiveFormsModule,
		AngularToastifyModule,
		AngularEditorModule,
	],
	providers: [
		AuthService,
		RestaurantService,
		httpInterceptorProviders,
		ToastService,
		DishService,
		ItemsService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
