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
