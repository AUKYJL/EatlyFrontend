import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDish } from '../types/types';
import { AuthService } from './auth.service';
@Injectable()
export class DishService {
	constructor(private http: HttpClient, private authService: AuthService) {}

	public getAllDishes() {
		return this.http.get<IDish[]>(environment.apiUrl + 'dishes');
	}
	public getDishesWithPaginations(page: number, limit: number) {
		return this.http.get<IDish[]>(
			environment.apiUrl + `dishes/pagination?page=${page}&limit=${limit}`
		);
	}

	public changeLiked(dishId: number) {
		if (this.authService.user) {
			const headers = new HttpHeaders({
				'Content-Type': 'application/json',
			});

			this.http
				.patch<IDish>(environment.apiUrl + `dishes/${dishId}`, {
					headers: headers,
				})
				.subscribe();
		}
	}
}
