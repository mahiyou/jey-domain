import {defineStore} from "pinia";
import { call } from "@/mocks/API";
import {login} from "@/mocks/User"
import {register} from "@/mocks/User"
import {UserCridentionals} from "@/mocks/User"


export const useUserState = defineStore("UserState" , {
    
    state: () =>{
        return{
            id:0,
            code:"",
            user:{
                name: "",
                lastname: "",
                phone: "",
                email: "",
                avatar: "", 
            },
        };
    },
    actions:{
        async login(userCridentionals: UserCridentionals){
            const response = await call(login,[userCridentionals]);
            this.id = response.id;
            this.user.name = response.name;
            this.user.lastname = response.lastname;
            this.user.phone = response.phone;
            this.user.email = response.email;
            if( response.avatar){
                this.user.avatar = response.avatar;
            }
        },
        async register(userCridentionals:UserCridentionals, email:string , name:string , lastname:string , phone:string){
            const response = await call(register,[userCridentionals , name , lastname , phone , email]);
            this.id = response.id;
            this.user.name = response.name;
            this.user.lastname = response.lastname;
            this.user.phone = response.phone;
            this.user.email = response.email;
        }
    },
    getters: {
        userState: (state) => {
            if(state.id != 0){
                return true;
            }else{
                return false;
            }
        }
    }
})