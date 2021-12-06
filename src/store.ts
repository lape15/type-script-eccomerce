import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/test';
const store = configureStore({
  reducer: {
    counterReducer: counter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
