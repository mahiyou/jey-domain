import { defineStore } from "pinia";

export interface WhoisData {
    name: string;
    lastName: string;
    company: string;
    email: string;
}

export interface Currency {
    title: string;
}
export interface Cost {
    amount: number;
    currency: Currency;
}

export interface Type {
    type: string;
}
export enum CartItemType {
    REGISTER = 0,
    TRANSFER = 1,
    RENEW = 2,
}
export interface CartItem {
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

export const useCartStore = defineStore("CartStore", {

    state: () => {
        return {
            sugestedDomain: "" as string,
            items: [] as Array<RegisterCartItem>,
        };
    },
    actions: {
        addCartItem(cartItem: RegisterCartItem) {
            this.items.push(cartItem);
            return this.items.length - 1;
        },
        deleteCartItem(index: number) {
            this.items.splice(index, 1);
        },
        setSugestedDomain(domain: string) {
            console.log('pin-'+domain)
            this.sugestedDomain = domain;
            
        }
    },
    getters: {
        getSugestedDomain: (state): string => {
            return state.sugestedDomain
        }
    }

});