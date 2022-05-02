import { configureStore } from '@reduxjs/toolkit';
import{ useDispatch} from 'react-redux'
import cartReducer from './slices/cart'
import modalReducer from './slices/modal';
import loggerMiddleware from './logger';
const preloadedState = {};
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch()
export default store;
