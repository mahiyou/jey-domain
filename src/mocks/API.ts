export interface ICurrency {
    title: string;
}
export interface ICost {
    amount: number;
    currency: ICurrency;
}
export interface ITLD {
    suffix: string;
    costs: {
        register: number;
        renew: number;
        transfer?: number;
    };
    beforeDiscount?: {
        register: number;
        renew: number;
        transfer?: number;
    };
}
export type ISlabs = ISlab[];
export interface ISlab {
    slug: string;
    tlds: ITLD[];

}

export interface IFAQ {
    question: string;
    answer: string;
}

export function call<T extends Function>(fn: T, args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.7) {
                reject(new Error());
                return;
            }
            resolve(fn(...args));
        }, 2000);
    });
}