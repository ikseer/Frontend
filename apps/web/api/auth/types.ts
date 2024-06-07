export interface RegisterProps {
	first_name: string;
	last_name: string;
	username: string;
	user_email: string;
	password: string;
	gender: string;
}

export interface UserSavedProps {
	pk: string;
	token: string;
	refresh: string;
}
export interface PinNumberProps {
	otp: string;
}

export interface PhoneNumberProps {
	phone: string | undefined;
}
