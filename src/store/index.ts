
import { configureStore } from '@reduxjs/toolkit';
import operationsReducer from './operationsSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    operations: operationsReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
