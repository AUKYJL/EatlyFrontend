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
import { AuthService } from './services/auth.service';
import { LoginComponent } from './shared/login/login.component';
import { LogoModule } from './shared/logo/logo.module';
import { RegisterComponent } from './shared/register/register.component';
import { ForgetPasswordComponent } from './shared/forget-password/forget-password.component';

@NgModule({
	declarations: [
		AppComponent,
		RegisterComponent,
		LoginComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
  ForgetPasswordComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule,
		CommonModule,
		LogoModule,
		ReactiveFormsModule,
	],
	providers: [AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
