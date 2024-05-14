export interface RegisterType {
	first_name: string;
	last_name: string;
	username: string;
	user_email: string;
	password: string;
	gender: string;
}

export interface User {
	pk: string;
	token: string;
	refresh: string;
}
export interface PinNumberType {
	otp: string;
}

export interface PhoneNumberType {
	phone: string | undefined;
}
