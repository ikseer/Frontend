export interface Entity {
	/** uuid */
	id: string;
	/** date in ISO format */
	created_at: string;
	/** date in ISO format */
	updated_at: string;
}

export interface PaginationResult<Data> {
	count: number;
	next: string | null;
	previous: string | null;
	results: Data[];
}

export interface User extends Entity {
	/** URI of the image */
	image: string | null;
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	date_of_birth: string;
	date_joined: string;
	user_type: UserType;
	is_staff: boolean;
	is_active: boolean;
}

export type UserType = "patient" | "doctor" | "employee";

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
	review: number;
	stock: number;
	number_of_sales: number;
}

export interface Product extends Entity {
	generic_name: string;
	name: string;
	price: number | null;
	discount: ProductDiscount | null;
	images: ProductImage[];
	review: unknown[]; // TODO
	wisthlist: string[];
	final_price: number;
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

export interface ProductReview extends Entity {
	name: string;
	rating: number;
	review: string;
	user: string;
	product: string;
}

export interface ProductImage extends Entity {
	/** uuid */
	product: string;
	/** URI */
	image: string;
	priority: number;
}

export interface ProductDiscount extends Entity {
	discount_amount: null | string;
	discount_type: "amount" | "percentage";
	start_date: null | string;
	end_date: null | string;
	active: boolean;
	product: string;
	after_price: number;
	before_price: number;
}

export interface ProductCoupon extends Entity {
	code: string;
	/** float */
	discount_amount: string;
	discount_type: "amount" | "percentage";
	/** date in ISO format */
	start_date: string;
	/** date in ISO format */
	end_date: string;
	active: boolean;
	usage_limit: number | null;
	usage_count: number;
	/** float */
	minimum_purchase_amount: string | null;
}

export interface ProductCategory extends Entity {
	name: string;
	/** URI of the image */
	image: string | null;
}

export interface Cart extends Entity {
	items: CartItem[];
	user: string;
}

export interface CartItem extends Entity {
	product_name: string;
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

export interface Pharmacy extends Entity {
	name: string;
	location: string;
	phone: string;
	/** URI of the image */
	image: string | null;
	open_time?: string;
	close_time?: string;
	/** Decimal number */
	latitude: string | null;
	/** Decimal number */
	longitude: string | null;
}

export interface Order extends Entity {
	first_name: string;
	last_name: string;
	street: string;
	zip_code: string;
	owner: string;
	location: string;
	phone: string;
	user: string;
	status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
	total_price: string;
	order_items: string[];
}

export type VerboseOrder = Omit<Order, "order_items"> & {
	order_items: OrderItem[];
};

export interface OrderItem extends Entity {
	quantity: number;
	/** UUID of the product */
	product: string;
	/** UUID of the order */
	order: string;
	product_details: Product;
}

export interface DiscountProduct extends Entity {
	active: boolean;
	after_price: number;
	before_price: number;
	discount_amount: string;
	discount_type: string;
	end_date: string;
	image: string;
	product: string;
	start_date: string;
	// id: string;
}

export interface Chat {
	id: string;
	message: string;
	patient_profile: Patient;
	doctor_profile: Doctor;
	created_at: string;
	updated_at: string;
	patient: string;
	doctor: string;
}

export interface Message {
	id: string;
	sender: {
		id: string;
		username: string;
		email: string;
	};
	created_at: string;
	updated_at: string;
	message: string;
	text: string;
	timestamp: string;
	conversation: string;
}
