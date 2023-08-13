import { Cost } from "./DomainAvailabilityCheck";

export interface WhoisData {
    name: string;
    lastName: string;
    company: string;
    email: string;
}

export interface Type {
    type: string;
}
enum CartItemType {
    REGISTER = 0,
    TRANSFER = 1,
    RENEW = 2,
}
export interface CartItem {
    id:number
    domain: string;
    duration: number;
    cost: Cost;
    type: CartItemType;
}
export interface RegisterCartItem extends CartItem {
    type: CartItemType.REGISTER;
    whoisData: WhoisData;
    nameServers: string[];
}
export function getCartItems(): CartItem[] {
    const cartItems = [];
    for(let i=0, m=Math.random() * 10; i<m ; i++){
        cartItems.push(generateRegister(i+1))
    }
    return cartItems;
}
export function deletCartItem(id:number){

}
export function applyDiscount(discountCode:string){
    //1 added beacus we do not want 0 discount
    return Math.floor(Math.random() * 10 + 1)
}
function generateRegister(id:number): RegisterCartItem {
    const cost = {
        //1 added beacus we do not want 0 discount
        amount: Math.floor(Math.random() * 10 + 1),
        currency: {title:"هزار تومان"},
    };
    return {
        id: id,
        domain: "rion.com",
        duration: 12,
        cost: cost,
        type: CartItemType.REGISTER,
        whoisData:{
            name: "Sara",
            lastName: "Smith",
            company: "",
            email: "SaraSmith@mail.com"
        },
        nameServers:["ns1.google.com","ns2.google.com"]
    };
}
