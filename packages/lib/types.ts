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

export interface ProductsList {
	id: string;
	generic_name: string;
	name: string;
	price: number;
	image: Image[];
	discount: Discount;
}

export interface Product {
	id: string;
	images: [];
	review: [];
	wisthlist: string[];
	final_price: number;
	created_at: string;
	updated_at: string;
	name: string;
	generic_name: string;
	form: string;
	short_description: string;
	description: string;
	price: string;
	stock: string;
	code: string;
	category: string;
	pharmacy: string;
}
export interface ProductPage {
	count: number;
	next: string | null;
	previous: string | null;
	results: Product[];
}
[];

export interface ProductsListPage {
	count: number;
	next: string | null;
	previous: string | null;
	results: ProductsList[];
}

export interface Review {
	id: string;
	name: string;
	rating: number;
	review: string;
	user: string;
	product: string;
}
export interface Image {
	image: string;
	id: string;
	updated_at: string;
	created_at: string;
	priority: number;
	product: string;
}
export interface Discount {
	discount_amount: null | number;
	discount_type: null | string;
	start_date: null | string;
	end_date: null | string;
	active: boolean;
	product: string;
}

export type UserType = "patient" | "doctor" | "admin";
