export interface INavList {
	title: string;
	route: string;
}
export interface IAdvantagesList {
	title: string;
	desc: string;
}

export interface IUserReg {
	name: string;
	email: string;
	phone: string;
	password: string;
}
export interface IUserLog {
	email: string;
	password: string;
}
export interface IUser {
	id: number;
	email: string;
	name: string;
	token: string;
}

export interface IRestaurant {
	id: number;
	title: string;
	desc: string;
	tag: string;
	rating: number;
	adress: string;
	time: string;
	urlToImg: string;
	bookmarkedUsers?: [{ id: number }];
}
export enum RestaurantTags {
	mega = 'mega',
	medium = 'medium',
	bad = 'bad',
}
