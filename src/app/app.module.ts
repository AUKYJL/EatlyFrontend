import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthModule } from './pages/auth/auth.module';
import { HomeComponent } from './pages/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

import { register } from 'swiper/element/bundle';
import { AllItemsComponent } from './pages/all-items/all-items.component';
import { httpInterceptorProviders } from './pages/auth/auth.interceptor';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AuthService } from './services/auth.service';
import { CommentsService } from './services/comments.service';
import { DishService } from './services/dish.service';
import { ItemsService } from './services/items.service';
import { PopupService } from './services/popup.service';
import { RestaurantService } from './services/restaurant.service';
import { SharedService } from './services/shared.service';
import { SideCartMenuService } from './services/side-cart-menu.service';
import { AreYouSurePopupComponent } from './shared/components/are-you-sure-popup/are-you-sure-popup.component';
import { BookmarkComponent } from './shared/components/bookmark/bookmark.component';
import { CardAditionalInfoComponent } from './shared/components/card-aditional-info/card-aditional-info.component';
import { CardsSectionComponent } from './shared/components/cards-section/cards-section.component';
import { CloseComponent } from './shared/components/close/close.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { CommentsSectionComponent } from './shared/components/comments-section/comments-section.component';
import { CommentsWithPaginationComponent } from './shared/components/comments-with-pagination/comments-with-pagination.component';
import { CreateNewFoodComponent } from './shared/components/create-new-food/create-new-food.component';
import { CreateNewRestaurantComponent } from './shared/components/create-new-restaurant/create-new-restaurant.component';
import { DishCardComponent } from './shared/components/dish-card/dish-card.component';
import { DishInfoComponent } from './shared/components/dish-info/dish-info.component';
import { EditDishComponent } from './shared/components/edit-dish/edit-dish.component';
import { EditRestaurantComponent } from './shared/components/edit-restaurant/edit-restaurant.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { GetDiscountModule } from './shared/components/get-discount/get-discount.module';
import { HoverCardComponent } from './shared/components/hover-card/hover-card.component';
import { ItemsWithPaginationComponent } from './shared/components/items-with-pagination/items-with-pagination.component';
import { ItemsComponent } from './shared/components/items/items.component';
import { LikedComponent } from './shared/components/liked/liked.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoModule } from './shared/components/logo/logo.module';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { PopupComponent } from './shared/components/popup/popup.component';
import { ProfileRestaurantsComponent } from './shared/components/profile-restaurants/profile-restaurants.component';
import { PurchaseCounterComponent } from './shared/components/purchase-counter/purchase-counter.component';
import { PurchasesComponent } from './shared/components/purchases/purchases.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { ReportPopupComponent } from './shared/components/report-popup/report-popup.component';
import { RestaurantCardComponent } from './shared/components/restaurant-card/restaurant-card.component';
import { RestaurantInfoComponent } from './shared/components/restaurant-info/restaurant-info.component';
import { SideCartCardComponent } from './shared/components/side-cart-card/side-cart-card.component';
import { SideCartMenuComponent } from './shared/components/side-cart-menu/side-cart-menu.component';
import { UserAuthFieldComponent } from './shared/components/user-auth-field/user-auth-field.component';
import { WriteCommentComponent } from './shared/components/write-comment/write-comment.component';
import { HoverCardDirective } from './shared/directives/hover-card.directive';
import { HoverStarDirective } from './shared/directives/hover-star.directive';
import { PricePipe } from './shared/pipes/price.pipe';

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
		EditDishComponent,
		SideCartMenuComponent,
		SideCartCardComponent,
		CloseComponent,
		PurchaseCounterComponent,
		PurchasesComponent,
		PricingComponent,
		CommentComponent,
		CommentsSectionComponent,
		CommentsWithPaginationComponent,
		HoverStarDirective,
		WriteCommentComponent,
		ReportPopupComponent,
		AreYouSurePopupComponent,
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
		FormsModule,
		GetDiscountModule,
	],
	providers: [
		AuthService,
		RestaurantService,
		httpInterceptorProviders,
		ToastService,
		DishService,
		ItemsService,
		SideCartMenuService,
		CommentsService,
		SharedService,
		PopupService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
