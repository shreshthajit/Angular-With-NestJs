export interface SignUp {
  name: string;
  email: string;
  password: string;
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
  id:number,
  quantity: undefined | number;
  productId: undefined | number;
}

export interface cart{
  name:string,
  price:number,
  category:string,
  color:string,
  imageUrl:string,
  description:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}