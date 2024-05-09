import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
	ICreateRestaurant,
	IRestaurant,
	IUpdateRestaurant,
} from '../types/types';
import { AuthService } from './auth.service';

@Injectable()
export class RestaurantService {
	constructor(private http: HttpClient, private authService: AuthService) {}
	public deletedRestaurant = new EventEmitter();
	public editingRestaurant?: IUpdateRestaurant;

	private headers = new HttpHeaders({
		'Content-Type': 'application/json',
	});

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
			this.http
				.patch<number>(
					environment.apiUrl + `restaurants/change-bookmark/${restaurantId}`,
					{ headers: this.headers }
				)
				.subscribe();
		}
	}

	public createNewRestaurant(restaurant: ICreateRestaurant) {
		return this.http.post<ICreateRestaurant>(
			environment.apiUrl + 'restaurants',
			restaurant,
			{
				headers: this.headers,
			}
		);
	}

	public editRestaurant(restaurant: IUpdateRestaurant) {
		return this.http.patch<IUpdateRestaurant>(
			environment.apiUrl + `restaurants/${restaurant.id}`,
			{
				title: restaurant.title,
				desc: restaurant.desc,
				tag: restaurant.tag,
				adress: restaurant.adress,
				urlToImg: restaurant.urlToImg,
				time: restaurant.time,
			},
			{
				headers: this.headers,
			}
		);
	}

	public getAllBookmarkedRestaurantsWithPagination(
		page: number,
		limit: number
	) {
		return this.http.get<IRestaurant[]>(
			environment.apiUrl +
				`restaurants/bookmarked/pagination?page=${page}&limit=${limit}`,
			{ headers: this.headers }
		);
	}
	public getAllBookmarkedRestaurants() {
		return this.http.get<IRestaurant[]>(
			environment.apiUrl + `restaurants/bookmarked`,
			{ headers: this.headers }
		);
	}
	public getAllOwnRestaurantsWithPagination(page: number, limit: number) {
		return this.http.get<IRestaurant[]>(
			environment.apiUrl +
				`restaurants/own/pagination?page=${page}&limit=${limit}`,
			{ headers: this.headers }
		);
	}
	public getAllOwnRestaurants() {
		return this.http.get<IRestaurant[]>(
			environment.apiUrl + `restaurants/own`,
			{ headers: this.headers }
		);
	}
	public delete(id: number) {
		return this.http.delete(environment.apiUrl + `restaurants/${id}`, {
			headers: this.headers,
		});
	}
}
