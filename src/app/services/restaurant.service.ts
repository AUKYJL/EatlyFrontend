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
		//TODO:все работает, если взять токен из локала и поставить в инсомнию, но конкретно тут скорее всего токен не прокидывается просто и из-за этого аноторайзед
		console.log(this.authService.user?.token);

		if (this.authService.user) {
			const headers = new HttpHeaders({
				'Content-Type': 'application/json',
			});
			console.log(restaurantId);

			this.http
				.patch<number>(
					environment.apiUrl + `restaurants/change-bookmark/${restaurantId}`,
					{ headers: headers }
				)
				.subscribe((response) => {
					console.log('Response:', response);
				});
		}
	}
}
