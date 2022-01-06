import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/test';
import loggerMiddleware from './logger';
const preloadedState = {};
const store = configureStore({
  reducer: {
    counterReducer: counter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
