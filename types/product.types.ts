export interface SingleProductCartType {
  id: number;
  name: string;
  generic_name: string;
  form: string;
  strength: string;
  factory_company: string;
  description: string;
  price: number;
  quantity: null | number;
  images: { image: string }[];
  category: number;
  pharmacy: number;
  discount?: boolean;
  key?: string;
}

export interface SingleItemType {
  item: SingleProductCartType;
}
