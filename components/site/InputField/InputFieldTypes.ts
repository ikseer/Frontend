

export interface propsType {
  id: string;
  register: any;
  errors: any;
  placeholder?: string;
  Icon?: React.ReactElement | string;
  width?: string | undefined;
  object?: object;
  value?: string;
  labels?: string[] | [string, React.ReactElement] | React.ReactElement[];
  type?: string;
  flexType?: string;
  disabled?: boolean;
}

export interface styleType {
  width: string | undefined;
}