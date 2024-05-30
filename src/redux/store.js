import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './constactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});