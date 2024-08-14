import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { headers } from '../shared/consts/consts';
import { ICreateDish, IDish, IUpdateDish } from '../types/types';
import { AuthService } from './auth.service';
@Injectable()
export class DishService {
	constructor(private http: HttpClient, private authService: AuthService) {}
	private BASE_URL = `${environment.apiUrl}/dishes`;
	public deletedDish = new EventEmitter();

	public getAllDishes() {
		return this.http.get<IDish[]>(this.BASE_URL);
	}
	public getDishesWithPaginations(page: number, limit: number) {
		return this.http.get<IDish[]>(
			`${this.BASE_URL}/pagination?page=${page}&limit=${limit}`
		);
	}
	public getRestaurantDishes(restarauntId: number) {
		return this.http.get<IDish[]>(
			`${this.BASE_URL}/restaurant/${restarauntId}`
		);
	}
	public getRestaurantDishesWithPagination(
		restarauntId: number,
		page: number,
		limit: number
	) {
		return this.http.get<IDish[]>(
			`${this.BASE_URL}/restaurant/${restarauntId}/pagination?page=${page}&limit=${limit}`
		);
	}
	public changeLiked(dishId: number) {
		if (this.authService.user) {
			this.http
				.patch<IDish>(`${this.BASE_URL}/change-liked/${dishId}`, {
					headers: headers,
				})
				.subscribe();
		}
	}

	public getPopular(restaurantId: number) {
		return this.http.get<IDish[]>(
			`${this.BASE_URL}/restaurant/${restaurantId}/popular`
		);
	}

	public createDish(dish: ICreateDish) {
		return this.http.post<ICreateDish>(this.BASE_URL, dish, {
			headers: headers,
		});
	}

	public getDishById(dishId: number) {
		return this.http.get<IDish>(`${this.BASE_URL}/${dishId}`);
	}

	public getIsLiked(dish: IDish) {
		const userId = this.authService.user?.id;
		if (userId) {
			const users = dish.usersLikedFood;

			if (!users) return false;
			for (let i = 0; i < users.length; i++) {
				const { id } = users[i];
				if (id === userId) return true;
			}
		}
		return false;
	}

	public deleteDish(dishId: number) {
		return this.http.delete(`${this.BASE_URL}/${dishId}`);
	}

	public editDish(dish: IUpdateDish) {
		return this.http.patch<IUpdateDish>(
			`${this.BASE_URL}/${dish.id}`,
			{
				title: dish.title,
				price: dish.price,
				timeToCook: dish.timeToCook,
				tag: dish.tag,
				urlToImg: dish.urlToImg,
				dishGroup: dish.dishGroup,
				dishCategory: dish.dishCategory,
			},
			{ headers: headers }
		);
	}
}
