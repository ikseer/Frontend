'use client'
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (value:string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber:string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{3,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  const mainStyle = {
    color: 'red'
  }

  return (
    <>
      <PhoneInput
        country={'in'}
        value={phoneNumber}
        className="text-black"
        onChange={handleChange}
        style={{width:'75%'}}
        inputProps={{
          required: true,
        }}
      />

      {!valid && (
        <p className="text-red-600 text-xs">Please enter a valid phone number.</p>
      )}
    </>
  );
};

export default PhoneNumberValidation;
