import React, { useState } from 'react';
import './PickedByReaders.scss';

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
    <div>
      <h2>Picked by Readers</h2>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {books.map((book) => (
          <div className="picked-by-readers__book-card">
            <img
              src={book.imgLink}
              alt={book.name}
              className="picked-by-readers__book-card__img img-fluid"
            />
            <p className="picked-by-readers__book-card__name">{book.name}</p>
            <p className="picked-by-readers__book-card__author">
              {book.author}
            </p>
            <p className="picked-by-readers__book-card__reviews">
              {book.reviews}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
