import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserImageDirective } from 'src/app/shared/directives/userImage.directive';
import { PersonalDataTabComponent } from 'src/app/shared/components/personal-data-tab/personal-data-tab.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [ProfileComponent, PersonalDataTabComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
})
export class ProfileModule {}
