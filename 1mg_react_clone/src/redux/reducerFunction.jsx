export const initialState = {
    User: [],
    UID_Email:[],
    Product: [],
    Cart: [],
    isAuth: false
}

export function ReducerFunction(state = initialState, {type,payload}){
    switch (type){
        case "ADDUser" : 
        return {...state, User: [...state.User,payload]}

        case "ADDUserID" : 
        return {...state, UID_Email: [...state.UID_Email,payload]}

        case "AddProduct" : 
        return {...state, Product: [...state.Product,payload]}

        case "AddToCart" : 
        return {...state, Cart: [...state.Cart,payload]}

        case "isAuth":
            return {...state, isAuth : !state.isAuth}

        case "RESET_STATE":
                return {...initialState,isAuth: state.isAuth};

        default:
            return state

    }
}