export interface SignUp{
    name: string,
    email: string,
    password: string,
     
}

export interface Login{
    email: string,
    password: string,
}

export interface product{
    name:string,
    price:number,
    category: string,
    color:string,
    description:string,
    imageUrl:string,
    id:number,
}