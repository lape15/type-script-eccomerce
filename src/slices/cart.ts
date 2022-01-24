import { createSlice, PayloadAction,createAction,createReducer } from '@reduxjs/toolkit';


 export interface CartItem {
    name: string
    id:number
    imageUrl: string
    quantity: number
    price: number
  }

  type CartState = {
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
        }
    }

})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
