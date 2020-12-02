import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getSixBooks } from "../../../api/bookAPI";
import { BookDetail } from "../../../models/BookDetail";
import { addBook } from "../../Cart/cartSlice";
import "./BooksList.scss";

interface Props {
  booksList: BookDetail[];
}

export const BooksList = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <Row className="books-list m-0">
      {props.booksList.map((book: BookDetail) => {
        return (
          <Col className="books-list__item text-center font-weight-bold mb-4" xs="6" md="3">
            <div className="books-list__item__img-wrapper position-relative mx-auto">
              <Link to={`/books/${book._id}`}>
                <img
                  src={book.imgLink}
                  alt={book.name}
                  className="books-list__item__img position-absolute"
                />
              </Link>
            </div>
            <p className="pt-3 playfair books-list__item__name-wrapper">
              <Link
                to={`/books/${book._id}`}
                className="text-decoration-none playfair books-list__item__name"
              >
                {book.name}
              </Link>
            </p>
            <p className="red-text books-list__item__price">${book.price}</p>
            <button
              className="books-list__item__add-to-cart-btn font-weight-bold"
              onClick={() => {
                dispatch(addBook({ book: book, numOfBooks: 1 }));
              }}
            >
              ADD TO CART
            </button>
          </Col>
        );
      })}
    </Row>
  );
};
