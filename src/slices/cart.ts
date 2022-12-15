import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type CartItem = {
  name?: string;
  id?: number;
  imageUrl?: string;
  quantity?: number;
  price?: number;
};

interface CartState {
  hidden: boolean;
  shoeCount: number;
  cartItems: Array<CartItem>;
  // zones: Array<Zone>
}

const initialState: CartState = {
  hidden: false,
  shoeCount: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    removeFromCart: (state, action: PayloadAction<CartItem['id']>) => {
      state.cartItems.splice(action.payload!, 1);
    },
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;

const addCartItem =
  (cartItem: CartItem, isCollection = false) =>
  (dispatch: Function, getState: Function) => {
    const item = { ...cartItem }; 
    const { cartItems } = getState().cart;
    const newCart = [...cartItems];
    const getItem = cartItems.find((cartI: CartItem) => cartI.name === item.name);
    const index = cartItems.indexOf(getItem);

    if (!getItem && item.quantity === undefined) {
      item.quantity = 1;
    }
    if (!isCollection && getItem) {
      item.quantity = item.quantity! > 0 ? item.quantity + getItem.quantity : getItem.quantity + 1;
    }
    if (isCollection && getItem) {
      item.quantity = getItem.quantity + 1;
      item.price = item.quantity! * item.price!;
    }
    const id = cartItems.length;
    item.id = item.id ? item.id : id;
    if (index === -1) newCart.push(item);
    else newCart.splice(index, 1, item);
    dispatch(addToCart(newCart));
  };

export { addCartItem, addToCart, removeFromCart };
export default cartSlice.reducer;
