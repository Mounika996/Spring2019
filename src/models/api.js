const API_ROOT = process.env.API_ROOT


export const Globals = { 
    user: null
}

export function login(){
    Globals.user = {name: "mounika"}
}

export function api(url){
    return fetch(API_ROOT + url).then(x=> x.json());
}