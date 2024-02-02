import { create } from "zustand";

export const useSession = create((set)=>({
user:null,
isLoggedIn:false,
login:(newUser)=>({user: newUser,isLoggedIn:true}),
logout: ()=> set({user:null,isLoggedIn:false})
}))