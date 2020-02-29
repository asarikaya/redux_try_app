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
            // carta eklenen elemanlardan, elemanın product kısmındaki id değeri(çünkü carttaki her elemanda 1 product 1 quantity değeri mevcut) action la gelen payload ın id sine (çünkü actionda quantity yok direk product geliyor) eşit olmayanları filtreliyorum. Yani silinecek veriyi değil silinmeyecek verileri bir araya topluyorum silinecek veri dışarda kalıyor
            const newState2 = state.filter(cartItem=>cartItem.product.id!==action.payload.id);
            // newState değişkenini bir önceki casede tanımladığım için burada ismini değiştirdim
            return newState2;
    
        default:
            return state;
    }
}