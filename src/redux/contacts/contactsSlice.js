import { createSlice } from '@reduxjs/toolkit';
//цей слайс відповідає за контакти

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу записую в persist(local)
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  // Об'єкт редюсерів
  //створюю екшени для додавання та видалення контактів
  reducers: {
    //додаю цей метод у форму
    addContact(state, action) {
      // console.log(action.payload)
      state.items.push(action.payload);
    },
    //додаю цей метод у contactList
    deleteContact(state, action) {
      // console.log(action.payload)

      state.items = state.items.filter(item => item.id !== action.payload);

    },
  },
});

// Генератори екшенів які визиваються через dispatch
//mетоди для додавання та видалення контактів
export const { addContact, deleteContact } = contactsSlice.actions;
// це редюсер контактів імпортую в store.js
export const contactsReducer = contactsSlice.reducer;
