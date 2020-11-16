import React, { useState } from "react";
import { Container } from "reactstrap";
import { BookDetail } from "../../../models/BookDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Details.scss";
import { useDispatch } from "react-redux";
import { addBook } from "../../Cart/cartSlice";

interface Props {
  book: BookDetail;
}

export const Details = (props: Props) => {
  const [numOfBooks, setNumOfBooks] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (numOfBooks >= 1) dispatch(addBook({ book: props.book, numOfBooks }));
  };

  const handleNumOfBookChange = (event: any) => {
    setNumOfBooks(event.target.value);
  };

  const handleIncreaseNumOfBook = () => {
    setNumOfBooks(numOfBooks + 1);
  };

  const handleDecreaseNumOfBook = () => {
    if (numOfBooks > 1) setNumOfBooks(numOfBooks - 1);
  };

  return (
    <Container>
      <div className="book-detail my-5 d-flex flex-column flex-sm-row">
        <div className="book-detail__img-wrapper mr-sm-5">
          <img
            className="book-detail__img"
            src={props.book.imgLink}
            alt={props.book.name}
          />
        </div>
        <div className="book-detail__info">
          <h1 className="playfair">{props.book.name}</h1>
          <p className="book-detail__price">${props.book.price}</p>
          <div className="book-detail__add-to-cart">
            <div className="d-inline-block position-relative">
              <input
                className="book-detail__add-to-cart__number text-center"
                type="number"
                min="1"
                value={numOfBooks}
                onChange={handleNumOfBookChange}
              />
              <button
                className="book-detail__add-to-cart__increase-btn position-absolute"
                onClick={handleIncreaseNumOfBook}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <button
                className="book-detail__add-to-cart__decrease-btn position-absolute"
                onClick={handleDecreaseNumOfBook}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
            </div>
            <button
              className="book-detail__add-to-cart__add-btn position-relative align-top ml-3"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
          <hr />
          <p className="book-detail__meta">
            Categories: {props.book.categories.join(", ")}
          </p>
        </div>
      </div>
    </Container>
  );
};
