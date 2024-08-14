import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IUser,
  IUserLog,
  IUserReg,
  IUserUpdate,
  IUserUpdateToken,
} from '../types/types';
import { SideCartMenuService } from './side-cart-menu.service';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs';

@Injectable()
export class AuthService {
  public user?: IUser;
  public authForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    urlToImg: new FormControl(''),
  });
  public initialAuthFormValue: any;
  private BASE_URL = `${environment.apiUrl}`;
  private sideCart!: SideCartMenuService;

  constructor(private http: HttpClient) {
    this.sideCart = inject(SideCartMenuService);
    this.init();
  }

  public init() {
    if (!this.checkAuth()) return;
    console.log(`init auth ${JSON.stringify(this.user)}`);
    this.authForm.reset({
      email: this.user?.email,
      name: this.user?.name,
      phone: this.user?.phone,
      urlToImg: this.user?.urlToImg,
    });
    console.log(`init authform ${JSON.stringify(this.authForm.value)}`);
    this.initialAuthFormValue = this.authForm.value;
    setTimeout(() => this.sideCart.init());
  }

  public checkAuth() {
    const data = localStorage.getItem(environment.loggedInUser);
    if (data) {
      this.user = JSON.parse(data);
      console.log(`checkauth ${JSON.stringify(this.user)}`);
    }
    return this.user;
  }

  public registration(user: IUserReg) {
    return this.http.post<IUserUpdateToken>(this.BASE_URL + '/user', user);
  }

  public login(user: IUserLog) {
    return this.http.post<IUserUpdateToken>(
      this.BASE_URL + '/auth/login',
      user
    );
  }

  public update(user: IUserUpdate) {
    this.http
      .patch<IUserUpdateToken>(this.BASE_URL + '/user', user)
      .subscribe(data => this.saveDataInLocalStorage(data));
  }

  public saveDataInLocalStorage(data: IUserUpdateToken) {
    localStorage.setItem(environment.loggedInUser, JSON.stringify(data));
    this.init();
  }
  public logout() {
    localStorage.removeItem(environment.loggedInUser);
    this.user = undefined;
    window.location.reload();
  }
}
