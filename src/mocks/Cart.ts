
import { useCartStore, WhoisData, Type, CartItemType, CartItem, RegisterCartItem, Cost } from "@/stores/Cart";

export function applyDiscount(discountCode: string) { // eslint-disable-line @typescript-eslint/no-unused-vars
    return Math.floor(Math.random() * 10 + 1);
}

// export function getCartItems(): CartItem[] {
//     const cartItems = [];
//     for(let i=0, m=Math.random() * 10; i<m ; i++){
//         cartItems.push(generateRegister(i+1));
//     }
//     return cartItems;
// }
// export function deletCartItem(id:number){ // eslint-disable-line @typescript-eslint/no-unused-vars

// }

// function generateRegister(id:number): RegisterCartItem {
//     const cost = {
//         amount: Math.floor(Math.random() * 10 + 1),
//         currency: {title:"هزار تومان"},
//     };
//     return {
//         id: id,
//         domain: "rion.com",
//         duration: 12,
//         cost: cost,
//         type: CartItemType.REGISTER,
//         whoisData:{
//             name: "Sara",
//             lastName: "Smith",
//             company: "",
//             email: "SaraSmith@mail.com"
//         },
//         nameServers:["ns1.google.com","ns2.google.com"]
//     };
// }
