import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { AuthSwiperModule } from 'src/app/shared/components/auth-swiper/auth-swiper.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { AuthComponent } from './auth.component';
import { httpInterceptorProviders } from './auth.interceptor';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
	declarations: [AuthComponent],
	exports: [],
	imports: [AuthRoutingModule, LogoModule, HttpClientModule, AuthSwiperModule],
	providers: [AuthService, httpInterceptorProviders],
})
export class AuthModule {}
