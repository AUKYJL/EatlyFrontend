import { Component } from '@angular/core';
import { IAdvantagesList } from 'src/app/types/types';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	public advantagesList: IAdvantagesList[] = [
		{
			title: '10K+',
			desc: 'Satisfied Costumers All Great Over The World ',
		},
		{
			title: '4M',
			desc: 'Healthy Dishes Sold Including Milk Shakes Smooth',
		},
		{
			title: '99.99%',
			desc: 'Reliable Customer Support We Provide Great Experiences',
		},
	];
}
