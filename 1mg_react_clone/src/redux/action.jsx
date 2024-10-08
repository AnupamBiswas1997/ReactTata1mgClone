export function ADDUser(payload){
    return {type : "ADDUser", payload }
}

export function ADDUserID(payload){
    return {type : "ADDUserID", payload }
}

export function AddProduct(payload){
    return {type : "AddProduct", payload }
}

export function AddToCart(payload){
    return {type : "AddToCart", payload }
}

export function AuthUser(){
    return {type : "isAuth"}
}