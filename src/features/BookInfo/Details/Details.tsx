import React from 'react';
import { Container } from 'reactstrap';
import { BookDetail } from '../../../models/BookDetail';
import './Details.scss';

interface Props {
  book: BookDetail;
}

export const Details = (props: Props) => {
  const handleAddToCart = () => {};

  const handleOnChange = () => {};

  return (
    <Container>
      <div className="book-detail d-flex flex-column flex-sm-row">
        <div>
          <img src={props.book.imgLink} alt={props.book.name} />
        </div>
        <div>
          <h1 className="playfair">{props.book.name}</h1>
          <p className="book-detail__price">${props.book.price}</p>
          <div className="book-detail__add-to-cart">
            <input
              className="book-detail__add-to-cart__number"
              type="number"
              min="1"
            />
            <button></button>
            <button></button>
            <button
              className="book-detail__add-to-cart__add-btn"
              color="danger"
            >
              ADD TO CART
            </button>
          </div>
          <hr />
          <p>Categories: {props.book.categories.join(', ')}</p>
        </div>
      </div>
    </Container>
  );
};
