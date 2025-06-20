
import { configureStore } from '@reduxjs/toolkit';
import operationsReducer from './operationsSlice.js';
import themeReducer from './themeSlice.js';

export const store = configureStore({
  reducer: {
    operations: operationsReducer,
    theme: themeReducer,
  },
});
