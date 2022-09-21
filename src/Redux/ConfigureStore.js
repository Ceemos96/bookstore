import { configureStore } from '@reduxjs/toolkit';
import BooksReducer from './Books/Books';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  reducer: {
    books: BooksReducer,
    category: categoriesReducer,
  },
});

export default store;
