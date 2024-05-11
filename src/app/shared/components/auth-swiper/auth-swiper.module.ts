import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthSwiperComponent } from './auth-swiper.component';

@NgModule({
	imports: [CommonModule],
	exports: [AuthSwiperComponent],
	declarations: [AuthSwiperComponent],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthSwiperModule {}
