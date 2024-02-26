export interface ProductType {
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

export interface SingleItemType {
  item: ProductType;
}
