import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { headers } from '../shared/consts/consts';
import { ICreateDish, IDish, IUpdateDish } from '../types/types';
import { AuthService } from './auth.service';
@Injectable()
export class DishService {
	constructor(private http: HttpClient, private authService: AuthService) {}

	public deletedDish = new EventEmitter();

	public getAllDishes() {
		return this.http.get<IDish[]>(environment.apiUrl + 'dishes');
	}
	public getDishesWithPaginations(page: number, limit: number) {
		return this.http.get<IDish[]>(
			environment.apiUrl + `dishes/pagination?page=${page}&limit=${limit}`
		);
	}
	public getRestaurantDishes(restarauntId: number) {
		return this.http.get<IDish[]>(
			environment.apiUrl + `dishes/restaurant/${restarauntId}`
		);
	}
	public getRestaurantDishesWithPagination(
		restarauntId: number,
		page: number,
		limit: number
	) {
		return this.http.get<IDish[]>(
			environment.apiUrl +
				`dishes/restaurant/${restarauntId}/pagination?page=${page}&limit=${limit}`
		);
	}
	public changeLiked(dishId: number) {
		if (this.authService.user) {
			this.http
				.patch<IDish>(environment.apiUrl + `dishes/change-liked/${dishId}`, {
					headers: headers,
				})
				.subscribe();
		}
	}

	public getPopular(restaurantId: number) {
		return this.http.get<IDish[]>(
			environment.apiUrl + `dishes/restaurant/${restaurantId}/popular`
		);
	}

	public createDish(dish: ICreateDish) {
		return this.http.post<ICreateDish>(environment.apiUrl + 'dishes', dish, {
			headers: headers,
		});
	}

	public getDishById(dishId: number) {
		return this.http.get<IDish>(environment.apiUrl + `dishes/${dishId}`);
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
		return this.http.delete(environment.apiUrl + `dishes/${dishId}`);
	}

	public editDish(dish: IUpdateDish) {
		return this.http.patch<IUpdateDish>(
			environment.apiUrl + `dishes/${dish.id}`,
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
