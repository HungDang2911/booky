import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookDetail } from "../../models/BookDetail";

interface BookInCart {
  _id: string;
  name: string;
  price: number;
  imgLink: string;
  numOfBooks: number;
}

interface PayloadAddBook {
  book: BookDetail;
  numOfBooks: number;
}

interface PayloadRemoveBook {
  _id: string;
}
interface CartState {
  books: Array<BookInCart>;
  subtotal: number;
}

const initialState: CartState = {
  books: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<PayloadAddBook>) {
      const bookInCartIdx = state.books.findIndex(
        (books) => books._id === action.payload.book._id
      );
      if (bookInCartIdx !== -1)
        state.books[bookInCartIdx].numOfBooks += action.payload.numOfBooks;
      else {
        const { _id, name, price, imgLink } = action.payload.book;
        const numOfBooks = action.payload.numOfBooks;
        state.books.push({ _id, name, price, imgLink, numOfBooks });
      }
      state.subtotal = state.books.reduce(
        (acc, bookInCart) => acc + bookInCart.numOfBooks * bookInCart.price,
        0
      );
    },
    removeBook(state, action: PayloadAction<PayloadRemoveBook>) {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
      state.subtotal = state.books.reduce(
        (acc, bookInCart) => acc + bookInCart.numOfBooks * bookInCart.price,
        0
      );
    },
    removeAllBook(state) {
      state.books = [];
    },
  },
});

export const { addBook, removeBook, removeAllBook } = cartSlice.actions;
export default cartSlice.reducer;
