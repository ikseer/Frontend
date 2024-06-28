export interface User {
	image: string;
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

export type UserType = "patient" | "doctor" | "admin";
