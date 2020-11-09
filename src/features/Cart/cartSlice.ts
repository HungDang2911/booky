import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";

interface CartState {
  books: Array<Book>;
}


const initialState: CartState = {
  books: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<Book>) {
      state.books.push(action.payload);
    },
    removeBook(state, action: PayloadAction<Book>) {
      state.books.filter(book => book._id !== action.payload._id);
    },
    removeAllBook(state) {
      state.books = [];
    }
  }
})

export const { addBook, removeBook, removeAllBook } = cartSlice.actions;
export default cartSlice.reducer;