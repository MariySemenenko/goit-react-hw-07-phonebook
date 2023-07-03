import { createSlice } from '@reduxjs/toolkit';

//цей слайс відповідає за компонент Filter
const filterSlice = createSlice({
  
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: '',
 
  reducers: {
    setFilter(_, action) {
      // console.log(action.payload)
      return action.payload;
    },
  },
});


//експортую  акшин для запису фільтру
export const { setFilter } = filterSlice.actions;
// це редюсер фільтру імпортую в store.js
export const filterReducer = filterSlice.reducer;
