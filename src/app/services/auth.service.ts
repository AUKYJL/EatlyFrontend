import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser, IUserLog, IUserReg } from '../types/types';
import { SideCartMenuService } from './side-cart-menu.service';

@Injectable()
export class AuthService {
	public user?: IUser;
	private BASE_URL = `${environment.apiUrl}`;
	private sideCart!: SideCartMenuService;

	constructor(private http: HttpClient) {
		this.sideCart = inject(SideCartMenuService);
		if (this.checkAuth()) this.init();
	}

	public init() {
		setTimeout(() => this.sideCart.init());
	}

	public checkAuth() {
		let data = localStorage.getItem(environment.loggedInUser);
		if (data) {
			this.user = JSON.parse(data);
		}
		return this.user;
	}

	public registration(user: IUserReg) {
		return this.http.post<IUserReg>(this.BASE_URL + '/user', user);
	}

	public login(user: IUserLog) {
		return this.http.post<IUserReg>(this.BASE_URL + '/auth/login', user);
	}

	public logout() {
		localStorage.removeItem(environment.loggedInUser);
		this.user = undefined;
		window.location.reload();
	}
}
