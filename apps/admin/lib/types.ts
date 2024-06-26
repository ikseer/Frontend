export interface Entity {
	id: string;
	/** datetime in ISO format */
	created_at: string;
	/** datetime in ISO format */
	updated_at: string;
	deleted: boolean;
}

export interface Visit extends Entity {
	measurement: Measurement | null;
	attachment: Attachment[];
	visit_number: number;
	start_at: null | string;
	end_at: null | string;
	status: null | "pending" | "done" | "canceled";
	doctors: number[];
	ticket: number;
	notes: string;
	patient: string;
	patient_name: string;
}

export interface Measurement {
	height?: number;
	weight?: number;
	blood_pressure?: number;
	temperature?: number;
	pulse?: number;
	oxygen_level?: number;
}

export interface ExtractedMeasurement {
	date: string;
	height?: number;
	weight?: number;
	blood_pressure?: number;
	temperature?: number;
	pulse?: number;
	oxygen_level?: number;
}

export interface Attachment extends Entity {
	url: string;
	/** URI of the file */
	file: string;
	kind: string;
	notes: string;
	visit: string | null;
	user: number;
	file_name: string | null;
	file_type: string;
}

export interface Patient extends Entity {
	nationality: string;
	national_id: string;
	full_name: string;
	image: ImageType | null;
	address: Address | null;
	phone: PhoneNumber | null;
	gender: Gender;
	martial_status: string;
	status: string;
	/** user ID, a generic user table in the backend to just group data and keep DRY */
	user: number;
	/** date in ISO format */
	date_of_birth: string;
	notes: string;
	blood_type: string;
	disease_type: string;
	email: string;
}

export interface PatientVerbose extends Patient {
	doctors: Doctor[];
}

export interface User extends Entity {
	/** datetime */
	last_login: string;
	/** datetime */
	date_joined: string;
	is_superuser: boolean;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	is_staff: boolean;
	is_active: boolean;
}

export interface Doctor extends Entity {
	full_name: string;
	gender: Gender;
	national_id: string;
	speciality: string;
	license_number: string;
	experience_years: number;
	work_days: string;
	email: string;
	marital_status: string;
	nationality: string;
	notes: string;
	address: Address | null;
	phone: PhoneNumber | null;
	/** date in ISO format */
	date_of_birth: string;
	/** user ID, a generic user table in the backend to just group data and keep DRY */
	user: number;
}

export interface Employee extends Entity {
	full_name: string;
	gender: Gender;
	national_id: string;
	speciality: string;
	license_number: string;
	experience_years: number;
	work_days: string;
	email: string;
	marital_status: string;
	nationality: string;
	notes: string;
	address: Address | null;
	phone: PhoneNumber | null;
	/** date in ISO format */
	date_of_birth: string;
	/** user ID, a generic user table in the backend to just group data and keep DRY */
	user: number;
}

export interface Address {
	street: string;
	city: string;
	governorate: string;
}

export interface PhoneNumber {
	mobile: string;
}

export type Gender = "female" | "male";

export interface ImageType extends Entity {
	/** URI of the image */
	image: string;
	user: number;
}

export interface BackendError {
	detail: string;
}
