import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // sepette olan ürünlerden payload ile gelen ürüne eşit olan varsa addetItem true olacak
            var addedItem=state.find(c=>c.product.id===action.payload.product.id )
            // addetItem true ise o cartta zaten olan ürünün adedini arttır
            if(addedItem){
                // state'i (cart) dolaşıyorum gelen ürünün id sine eşit olan ürünü bulduğumda adedini 1 arttırıyorum
                var newState = state.map(cartItem=>{
                    if(cartItem.product.id===action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem;
                })  
                return newState;          
            }else{
                // statenin bir kopyasını al ve o kopyaya action ile gelen payload'ı ekle
                return [...state,{...action.payload}]
            }

        case actionTypes.REMOVE_FROM_CART:
            return alert('kara');
    
        default:
            return state;
    }
}