// Main
import React from 'react';

// Interface
export interface propsType {
  placeholder?: string;
  Icon?: React.ReactElement | string;
  width?: string | undefined;
  id: string;
  object?: object;
  errors?: any;
  register: any;
  value?: string;
  labels?: string[] | [string, React.ReactElement] | React.ReactElement[];
  type?: string;
  flexType?: string;
  disabled?: boolean;
}

export interface styleType {
  width: string | undefined;
}
