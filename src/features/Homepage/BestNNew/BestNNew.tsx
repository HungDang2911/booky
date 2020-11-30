/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { BookDetail } from '../../../models/BookDetail';
import './BestNNew.scss';

interface Props {}

export const BestNNew = (props: Props) => {
  const mockBook: BookDetail = {
    _id: 'dfkjasjkdfas',
    imgLink:
      'https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._AC_SY400_.jpg',
    name: 'How to win friends & influence people',
    price: 6.33,
    author: 'Dale Carnegie',
    rating: 5.0,
    categories: [],
    description: 'dkajsdkjd kalsjdlfkasd lkasjdlfkad lkdlfaksdl asdfasd asdfa',
    reviews: [],
  };
  const [bestSeller, setBestSeller] = useState<BookDetail>(mockBook);
  const [newBooks, setNewBooks] = useState<BookDetail[]>([
    mockBook,
    mockBook,
    mockBook,
    mockBook,
  ]);

  const handleMoreInfoBtn = () => {
    location.href = `/books/${bestSeller._id}`;
  };

  return (
    <Container className="best-n-new d-flex">
      <div className="best-n-new__best">
        <h4 className="best-n-new__best__title font-weight-bold mb-4">
          FEATURED BESTSELLERS
        </h4>
        <div className="d-flex">
          <div className="best-n-new__best__img-wrapper">
            <img
              className="best-n-new__best__img"
              src={bestSeller.imgLink}
              alt={bestSeller.name}
            />
          </div>
          <div className="best-n-new__best__info">
            <h3 className="best-n-new__best__info__name playfair position-relative">
              {bestSeller.name}
            </h3>
            <p>
              <span className="red-text font-weight-bold">Author: </span>
              <span className="grey-text">{bestSeller.author}</span>
            </p>
            <p className="grey-text best-n-new__best__info__description">
              {bestSeller.description}
            </p>
            <p>
              <span className="grey-text">Price: </span>
              <span className="red-text font-weight-bold best-n-new__best__info__price">
                ${bestSeller.price}
              </span>
            </p>
            <Link to={`/books/${bestSeller._id}`}>
              <button className="best-n-new__best__info__btn font-weight-bold">
                MORE INFO
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="best-n-new__new d-none d-md-block">
        <h4 className="best-n-new__new__title font-weight-bold mb-4">
          WHAT'S NEWS
        </h4>
        <div className="best-n-new__new__books-list">
          {newBooks.map((book) => {
            return (
              <div className="best-n-new__new__books-list__book d-flex my-4 position-relative">
                <div className="best-n-new__new__books-list__book__img-wrapper">
                  <Link to={`/books/${book._id}`}>
                    <img
                      className="best-n-new__new__books-list__book__img"
                      src={book.imgLink}
                      alt={book.name}
                    />
                  </Link>
                </div>
                <div className="best-n-new__new__books-list__book__info px-3">
                  <Link
                    className="text-decoration-none"
                    to={`/books/${book._id}`}
                  >
                    <p className="best-n-new__new__books-list__book__info__name playfair font-weight-bold mb-0">
                      {book.name}
                    </p>
                  </Link>
                  <p className="best-n-new__new__books-list__book__info__price red-text font-weight-bold">
                    ${book.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
