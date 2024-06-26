export interface User {
	image: string;
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	date_of_birth: string;
	timezone: string;
	gender: string;
	created_at: string;
	updated_at: string;
	id: string;
}

export interface Patient extends User {
	age: number;
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
