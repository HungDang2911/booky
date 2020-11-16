import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";

interface CartState {
  books: Object;
}

const initialState: CartState = {
  books: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook(state, action) {
      
    },
    removeBook(state, action) {
      delete state.books[action.payload._id]
    },
    removeAllBook(state) {
      state.books = {}
    },
  },
});

export const { addBook, removeBook, removeAllBook } = cartSlice.actions;
export default cartSlice.reducer;
