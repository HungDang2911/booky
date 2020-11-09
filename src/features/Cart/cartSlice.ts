import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";

interface CartState {
  books: Map<Book, Number>;
}

const initialState: CartState = {
  books: new Map(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.set(
        action.payload.book,
        action.payload.numOfBooks + state.books.get(action.payload.book)
      );
    },
    removeBook(state, action) {
      state.books.delete(action.payload);
    },
    removeAllBook(state) {
      state.books.clear();
    },
  },
});

export const { addBook, removeBook, removeAllBook } = cartSlice.actions;
export default cartSlice.reducer;
