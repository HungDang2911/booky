import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import { RootState } from "../../../app/rootReducer";
import { removeBook } from "../../Cart/cartSlice";
import "./Filters.scss";

interface Props {
  changePriceFilter: (lowerBound: number, upperBound: number) => void;
}

export default function Filters(props: Props) {
  const cart = useSelector((state: RootState) => state.cart);

  const [lowerPriceBound, setLowerPriceBound] = useState(0);
  const [upperPriceBound, setUpperPriceBound] = useState(20);

  const dispatch = useDispatch();

  const handlePriceFilterChange = (value: any) => {
    const [lowerBound, upperBound] = value;
    setLowerPriceBound(lowerBound);
    setUpperPriceBound(upperBound);
  };

  const handleApplyFilter = () => {
    props.changePriceFilter(lowerPriceBound, upperPriceBound)
  }

  return (
    <div className="filters d-flex flex-row flex-lg-column">
      <div className="filters__cart mb-5">
        <h4 className="filters__cart__title">CART</h4>
        <div className="filters__cart__books-list">
          {cart.books.map((book) => {
            return (
              <div
                key={"filters-" + book._id}
                className="filters__cart__books-list__item d-flex my-4"
              >
                <div className="filters__cart__books-list__item__img-wrapper">
                  <img
                    src={book.imgLink}
                    alt={book.name}
                    className="filters__cart__books-list__item__img"
                  />
                </div>
                <div className="ml-3 filters__cart__books-list__item__info">
                  <p className="playfair">
                    <Link
                      to={`/books/${book._id}`}
                      className="filters__cart__books-list__item__info__name font-weight-bold text-decoration-none"
                    >
                      {book.name}
                    </Link>
                  </p>
                </div>
                <div className="filters__cart__books-list__item__delete-btn-wrapper ml-2">
                  <div
                    className="filters__cart__books-list__item__delete-btn text-center"
                    onClick={() => {
                      dispatch(removeBook(book));
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                </div>
              </div>
            );
          })}
          <p className="font-weight-bold">
            Subtotal:{" "}
            <span className="red-text filters__cart__subtotal">
              ${cart.subtotal}
            </span>
          </p>
          <button className="filters__cart__checkout-btn">CHECKOUT</button>
        </div>
      </div>
      <div className="filters__price-filter">
        <h4 className="filters__price-filter__title">FILTER BY PRICE</h4>
        <div>
          <Range min={0} max={20} step={1} defaultValue={[0, 20]} onChange={handlePriceFilterChange}/>
        </div>
        <p><span className="grey-text">Price: </span>${lowerPriceBound} - ${upperPriceBound}</p>
        <button className="filters__price-filter__btn" onClick={handleApplyFilter}>FILTER</button>
      </div>
    </div>
  );
}
