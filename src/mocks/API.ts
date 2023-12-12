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

export interface ITldGroup {
    title: string;
    tlds: ITLD[];
}

export type ITldGroups = Record<string, ITldGroup>;

export interface IFAQ {
    question: string;
    answer: string;
}

export interface IPostSummarized {
    id: number;
    permalink: string;
    title: string;
    description: string,
    author: {
        id: number;
        name: string;
    };
    picture: string;
    date: number;
}

export interface IPost extends IPostSummarized {
    content: string,
    postCategory: string[];
}

export interface IPostInfo {
    post: IPost;
    comments: IComments[];
    categories: Categories[];
    relatedPosts: IPostInfo[];
}

export interface IBlogTab{
    name: string,
    value: string,
}


export interface IComments {
    id: number,
    content: string,
    author: {
        id: number;
        name: string;
        avatar: string;
    };
    date:number;
}

export interface Categories {
    id: number,
    parent: string,
    title: string,
    permalink: string
}

export function call<T extends Function>(fn: T, args: Parameters<any>): Promise<ReturnType<any>> {
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