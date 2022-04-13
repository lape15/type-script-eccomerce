import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type  CartItem = {
    name?: string
    id?:number
    imageUrl?: string
    quantity?: number
    price?: number 
  }

  interface CartState {
    hidden: boolean;
    shoeCount:number;
    cartItems: Array<CartItem>
    // zones: Array<Zone>
}


const initialState: CartState = {
    hidden: false,
    shoeCount:0,
    cartItems:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action: PayloadAction<CartItem>) => {
        state.cartItems.push(action.payload)
        },
        removeFromCart:(state,action: PayloadAction<CartItem["id"]>)=> {
            state.cartItems.splice(action.payload as number,1)
        }
    }

})

 const {addToCart,removeFromCart} = cartSlice.actions;

const addCartItem = (item: CartItem )=> (dispatch:Function,getState:Function) => {
const {cartItems} = getState().cart
const id = cartItems.length
item.id = id
dispatch(addToCart(item))
console.log(getState(), {cartItems})
}

export{
    addCartItem,
    addToCart,
    removeFromCart,
}
export default cartSlice.reducer;
