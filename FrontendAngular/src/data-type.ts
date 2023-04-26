export interface SignUp {
  name: string;
  email: string;
  password: string;
  _id: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface product {
  name: string;
  price: number;
  category: string;
  color: string;
  description: string;
  imageUrl: string;
  id: number;
  _id: string;
  quantity: undefined | number;
  productId: string | null;
}

export interface cart {
  name: string;
  price: number;
  category: string;
  color: string;
  imageUrl: string;
  description: string;
  id: number | undefined;
  _id: string;
  quantity: undefined | number;
  productId: string | null;
  userId: string | null;
}

export interface priceSummary {
  price: number;
  discount: number;
  tax: number;
  delivery: number;
  total: number;
  _id:string;
}

export interface order {
  email: string;
  address: string;
  contact: string;
  totalPrice: number;
  userId: string | null;
  _id:string;
}
