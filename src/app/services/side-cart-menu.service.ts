import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { headers } from '../shared/consts/consts';
import { ICartProduct } from '../types/types';

@Injectable()
export class SideCartMenuService {
	constructor(private http: HttpClient) {}

	private BASE_URL = `${environment.apiUrl}/cart-product`;
	public isActive: boolean = false;
	private productsSubject = new BehaviorSubject<ICartProduct[]>([]);
	public products$: Observable<ICartProduct[]> =
		this.productsSubject.asObservable();
	public productsCount: number = 0;
	public subtotalPrice: number = 0;

	public init() {
		this.updateProducts();
	}

	public updateProducts() {
		this.http
			.get<ICartProduct[]>(this.BASE_URL, {
				headers: headers,
			})
			.subscribe((p) => {
				this.productsSubject.next(p);
				this.productsCount = p.length;
				this.subtotalPrice = 0;
				p.forEach((product) => {
					this.subtotalPrice += +product.dish.price * +product.count;
				});
			});
	}

	public changeCount(newCount: number, dishId: number) {
		this.http
			.patch<ICartProduct>(
				`${this.BASE_URL}?dishId=${dishId}`,
				{ count: newCount },
				{ headers: headers }
			)
			.subscribe(() => {
				this.updateProducts();
			});
	}
}
