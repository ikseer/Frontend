// Main
import React from 'react';

// Interface

// First step
export interface RegisterType {
  first_name: string;
  last_name: string;
  username: string;
  user_email: string;
  password: string;
  gender: string;
}

// Second step
export interface User {
  pk: string;
  token: string;
  refresh: string;
}
export interface PinNumberType {
  otp: string;
}

// Third step
export interface PhoneNumberType {
  phone: string | undefined;
}
