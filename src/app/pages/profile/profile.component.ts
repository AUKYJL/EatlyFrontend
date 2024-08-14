import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public currentTab = 1;

  public tabs: { title: string }[] = [
    {
      title: 'Personal data',
    },
    { title: 'Something' },
    { title: 'Settings' },
  ];
}
