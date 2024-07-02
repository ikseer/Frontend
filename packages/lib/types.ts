export interface PaginationResult<Data> {
	count: number;
	next: string | null;
	previous: string | null;
	results: Data[];
}

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

export type UserType = "patient" | "doctor" | "admin";

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

export interface HomeProduct {
	id: string;
	generic_name: string;
	name: string;
	price: number | null;
	image: string;
	discount: ProductDiscount;
	review: string;
}

export interface Product {
	id: string;
	generic_name: string;
	name: string;
	price: number | null;
	discount: ProductDiscount | null;
	images: ProductImage[];
	review: unknown[]; // TODO
	wisthlist: string[];
	final_price: number;
	created_at: string;
	updated_at: string;
	/** Form of the medication (e.g., tablet, capsule, liquid */
	form: string;
	short_description: string;
	description: string;
	stock: number;
	code: string;
	/** uuid */
	category: string;
	/** uuid */
	pharmacy: string;
	factory_company: string;
	strength: string;
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
	id: string;
	/** uuid */
	product: string;
	/** URI */
	image: string;
	/** date */
	updated_at: string;
	created_at: string;
	priority: number;
}

export interface ProductDiscount {
	discount_amount: null | string;
	discount_type: null | "amount" | "percentage";
	start_date: null | string;
	end_date: null | string;
	active: boolean;
	product: string;
}

export interface Cart {
	id: string;
	created_at: string;
	updated_at: string;
	items: CartItems[];
	user: string;
}
export interface CartItems {
	id: string;
	product_name: string;
	create_at: string;
	updated_at: string;
	quantity: number;
	cart: string;
	product: string;
	product_final_price: number;
	product_image: string;
}
export interface CreateCartItem {
	quantity: number;
	cart: string;
	product: string;
}

export interface EditCartItem extends CreateCartItem {
	cartItemId: string;
}
