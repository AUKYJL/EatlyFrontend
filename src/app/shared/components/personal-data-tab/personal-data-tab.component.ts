import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

interface EditingFields {
  image: boolean;
  name: boolean;
  email: boolean;
  phone: boolean;
  password: boolean;
}

@Component({
  selector: 'app-personal-data-tab',
  styleUrls: ['./personal-data-tab.component.scss'],
  templateUrl: 'personal-data-tab.component.html',
})
export class PersonalDataTabComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    console.log(`data cons ${JSON.stringify(this.auth.authForm.value)}`);
  }

  public passwordForm = new FormGroup({
    oldPassword: new FormControl(null),
    newPassword: new FormControl(null),
    repeatedNewPassword: new FormControl(null),
  });

  public editingFields: EditingFields = {
    image: false,
    name: false,
    email: false,
    phone: false,
    password: false,
  };

  public onEdit() {
    this.onCancel();
    Object.keys(this.editingFields).forEach(key => {
      this.editingFields[key as keyof EditingFields] = false;
    });
  }

  public onSave() {
    this.auth.update({
      ...this.auth.authForm.value,
      ...this.passwordForm.value,
    });
  }

  public onCancel() {
    this.auth.authForm.reset(this.auth.initialAuthFormValue);
    this.passwordForm.reset();
  }
}
