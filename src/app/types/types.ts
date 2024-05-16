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

export interface ICreateRestaurant {
	title: string;
	tag: RestaurantTags;
	desc: string;
	adress: string;
	time: string;
	urlToImg: string;
}
export interface IUpdateRestaurant extends ICreateRestaurant {
	id: number;
}
export interface IRestaurant {
	owner: IUser;
	id: number;
	title: string;
	desc: string;
	tag: RestaurantTags;
	rating: number;
	adress: string;
	time: string;
	urlToImg: string;
	bookmarkedUsers?: [{ id: number }];
	dishes?: IDish[];
	comments: IComment[];
}
export enum RestaurantTags {
	mega = 'mega',
	medium = 'medium',
	bad = 'bad',
}
export interface IComment {}
export interface IDish {
	id: number;
	restaurantId: number;
	title: string;
	price: number;
	rating: number;
	timeToCook: string;
	isPopular: boolean;
	tag: DishTags;
	urlToImg: string;
	dishGroup: DishGroups;
	dishCategory: DishCategories;
	usersLikedFood: [{ id: number }];
}
export interface ICreateDish {
	restaurantId: string;
	title: string;
	price: string;
	timeToCook: string;
	tag: DishTags;
	urlToImg: string;
	dishGroup: DishGroups;
	dishCategory: DishCategories;
}
export interface IUpdateDish {
	id: string;
	title: string;
	price: string;
	timeToCook: string;
	tag: DishTags;
	urlToImg: string;
	dishGroup: DishGroups;
	dishCategory: DishCategories;
}
export enum DishCategories {
	pizza = 'pizza',
	asian = 'asian',
	donat = 'donat',
	ice = 'ice',
}
export enum DishTags {
	healthy = 'healthy',
	trending = 'trending',
	supreme = 'supreme',
}
export enum DishGroups {
	chickenVegetables = 'chicken vegetables',
}
export enum ItemsWithPaginationTypes {
	restaurants = 'restaurants',
	bookmarkedRestaurants = 'bookmarkedRestaurants',
	ownRestaurants = 'ownRestaurants',
	dishes = 'dishes',
	restaurantDishes = 'restaurantDishes',
}

export interface IfaqItem {
	question: string;
	answer: string;
	active: boolean;
}

export interface IHoverTab {
	title: string;
	callback: () => void;
	colorRGBA: string;
	hoverColorRGBA: string;
	icons?: [string, string];
	hovered: boolean;
}
