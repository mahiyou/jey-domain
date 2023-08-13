
export interface UserInfo{
    id: number;
    name: string;
    lastname: string;
    phone: string;
    email: string;
    avatar?: string;
}
export interface UserCridentionals{
    username: string,
    password: string,
}

export function register(_userCridentionals: UserCridentionals , email:string , name:string , lastname:string , phone:string){
    return{
        id: 1,
        name: name,
        lastname: lastname,
        phone:phone,
        email:email,
    };
}

export function login(userCridentionals: UserCridentionals) : UserInfo{// eslint-disable-line @typescript-eslint/no-unused-vars
    return{
        id: 1,
        name: "mahi",
        lastname: "you",
        avatar:"",
        phone:"",
        email:"",
    };
}

export function updateProfile(userCridentionals: UserCridentionals , changes: {email?: string, name?: string, lastname?: string, phone?: string}): UserInfo {// eslint-disable-line @typescript-eslint/no-unused-vars
    return{
        id: 1,
        name: "mahi2",
        lastname: "you2",
        avatar:"",
        phone:"",
        email:"",
    };
}