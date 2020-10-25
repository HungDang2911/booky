import React, { useState } from 'react';
import { BookCard } from './bookCard/BookCard';

interface Props {}

export interface Book {
  id: number;
  imgLink: string;
  name: string;
  author: string;
  rating: number;
  reviews: number;
}

export const PickedByReaders = (props: Props) => {
  const mockBook: Book = {
    id: 1,
    imgLink:
      'https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._AC_SY400_.jpg',
    name: 'How to win friends & influence people',
    author: 'Dale Carnegie',
    rating: 5.0,
    reviews: 0,
  };

  const [books, setBooks] = useState<Book[]>([
    mockBook,
    mockBook,
    mockBook,
    mockBook,
    mockBook,
    mockBook,
  ]);

  return (
    <div className="d-flex flex-row">
      <h2>The ReadDown</h2>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
