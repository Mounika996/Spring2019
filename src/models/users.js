import {api} from "./api";

export async function Getfriends(){
    const  x = await  api("users")
     console.log(x));
     return x;
}

