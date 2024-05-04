import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRestaurant } from '../types/types';
import { AuthService } from './auth.service';

@Injectable()
export class RestaurantService {
	constructor(private http: HttpClient, private authService: AuthService) {}

	public getAllRestaurants() {
		return this.http.get<IRestaurant[]>(environment.apiUrl + 'restaurants');
	}
	public getRestaurantsWithPagination(page: number, limit: number) {
		return this.http.get<IRestaurant[]>(
			environment.apiUrl + `restaurants/pagination?page=${page}&limit=${limit}`
		);
	}
	public changeBookmark(restaurantId: number) {
		if (this.authService.user) {
			const headers = new HttpHeaders({
				'Content-Type': 'application/json',
			});

			this.http
				.patch<number>(
					environment.apiUrl + `restaurants/change-bookmark/${restaurantId}`,
					{ headers: headers }
				)
				.subscribe();
		}
	}
}
