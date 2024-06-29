export interface User {
	/** uri of the image */
	image: string | null;
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	date_of_birth: string;
	date_joined: string;
	created_at: string;
	updated_at: string;
	user_type: UserType;
	is_staff: boolean;
	is_active: boolean;
	id: string;
}

export interface Patient extends User {
	timezone: string;
	bio: string;
	gender: "male" | "female";
	/** uuid */
	user: string;
}

export interface Doctor extends User {
	timezone: string;
	bio: string;
	gender: "male" | "female";
	/** uuid */
	user: string;
	price_for_reservation: number;
	approved: boolean;
	location: string;
	specialization: string;
}

export interface ProductsList {
	id: string;
	generic_name: string;
	name: string;
	price: number;
	image: ProductImage[];
	discount: ProductDiscount;
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

export interface ProductsHomePage {
	count: number;
	next: string | null;
	previous: string | null;
	results: ProductsList[];
}

export interface ProductReview {
	id: string;
	name: string;
	rating: number;
	review: string;
	user: string;
	product: string;
}
export interface ProductImage {
	image: string;
	id: string;
	updated_at: string;
	created_at: string;
	priority: number;
	product: string;
}

export interface ProductDiscount {
	discount_amount: null | number;
	discount_type: null | string;
	start_date: null | string;
	end_date: null | string;
	active: boolean;
	product: string;
}

export interface Cart {
	id: string;
	created_at: string;
	updated_at: string;
	items: {
		id: string;
		product_name: string;
		create_at: string;
		updated_at: string;
		quantity: number;
		cart: string;
		product: string;
	}[];
	user: string;
}
export interface CreateCartItem {
	quantity: number;
	cart: string;
	product: string;
}
export interface EditCartItem extends CreateCartItem {
	cartItemId: string;
}

export type UserType = "patient" | "doctor" | "admin";
