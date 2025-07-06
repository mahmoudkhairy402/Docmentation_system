
import { configureStore } from '@reduxjs/toolkit';
import operationsReducer from './operationsSlice.js';
import teamReducer from './teamSlice.js';
import ammunitionReducer from './ammunitionSlice.js';
import attachmentsReducer from './attachmentsSlice.js';
import themeReducer from './themeSlice.js';

export const store = configureStore({
  reducer: {
    operations: operationsReducer,
    team: teamReducer,
    ammunition: ammunitionReducer,
    attachments: attachmentsReducer,
    theme: themeReducer,
  },
});
