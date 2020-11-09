import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Book } from '../../../models/Book';
import './PickedByReaders.scss';

interface Props {}

export const PickedByReaders = (props: Props) => {
  const mockBook: Book = {
    _id: '',
    imgLink:
      'https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._AC_SY400_.jpg',
    name: 'How to win friends & influence people',
    price: 0,
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
    <Container>
      <h2 className="homepage__header playfair text-center">
        <i>Picked</i> by Readers
      </h2>
      <hr className="homepage__header__underline" />
      <div className="row">
        {books.map((book) => (
          <div className="picked-by-readers__book-card col-12 col-sm-6 col-md-2 text-center px-2">
            <div className="picked-by-readers__book-card__img-wrapper">
              <img
                src={book.imgLink}
                alt={book.name}
                className="picked-by-readers__book-card__img img-fluid"
              />
              <div className="picked-by-readers__book-card__img-layer" />
            </div>

            <p className="picked-by-readers__book-card__name mt-4">
              {book.name}
            </p>
            <p className="picked-by-readers__book-card__author mb-1">
              {book.author}
            </p>
            <p className="picked-by-readers__book-card__reviews">
              {book.reviews} Reviews
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
