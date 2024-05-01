import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser, IUserLog, IUserReg } from '../types/types';

@Injectable()
export class AuthService {
	public user?: IUser;
	private API_URL = environment.apiUrl;

	constructor(private http: HttpClient) {}

	public checkAuth() {
		let data = localStorage.getItem(environment.loggedInUser);
		if (data) {
			this.user = JSON.parse(data);
		}
		return this.user;
	}

	public registration(user: IUserReg) {
		return this.http.post<IUserReg>(this.API_URL + 'user', user);
	}

	public login(user: IUserLog) {
		return this.http.post<IUserReg>(this.API_URL + 'auth/login', user);
	}

	public logout() {
		localStorage.removeItem(environment.loggedInUser);
		this.user = undefined;
		window.location.reload();
	}
}
