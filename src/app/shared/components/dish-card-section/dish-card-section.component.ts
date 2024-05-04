import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DishService } from 'src/app/services/dish.service';
import { IDish } from 'src/app/types/types';

@Component({
	selector: 'app-dish-card-section',
	templateUrl: './dish-card-section.component.html',
	styleUrls: ['./dish-card-section.component.scss'],
})
export class DishCardSectionComponent implements OnInit {
	constructor(private dishService: DishService, private route: Router) {}

	@Input() left: boolean = false;
	public dishes$ = new Observable<IDish[]>();

	ngOnInit(): void {
		this.dishes$ = this.dishService.getDishesWithPaginations(1, 5);
	}

	public goToAllDishes() {
		this.route.navigate(['items/dishes']);
		window.scrollTo(0, 0);
	}
}
