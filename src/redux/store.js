import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

//записую в reducer контакти та фільтр
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
 
});


