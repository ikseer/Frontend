export interface Profile {
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	date_of_birth: string;
	timezone: string;
	gender: string;
	[key: string]: string;
}

export interface Product {
	id: number;
	name: string;
	generic_name: string;
	form: string;
	strength: string;
	factory_company: string;
	description: string;
	price: number;
	quantity: number;
	images: { image: string }[];
	category: number;
	pharmacy: number;
	discount?: boolean;
	key?: string;
}
