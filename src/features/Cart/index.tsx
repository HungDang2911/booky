import React from "react";
import "./index.scss";
import { Col, Container, Row, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { removeBook } from "./cartSlice";

interface Props {}

export const Cart = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  return (
    <Container className="pt-5">
      <Table className="cart__products-table font-weight-bold">
        <thead>
          <tr className="font-weight-bold align-middle">
            <td className="cart__products-table__product-col">Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>

        <tbody>
          {cart.books.map((book) => {
            return (
              <tr
                key={"cart-row" + book._id}
                className="cart__products-table__item"
              >
                <td>
                  <div className="d-flex">
                    <div className="cart__products-table__item__delete-btn-wrapper my-auto mr-5">
                      <div
                        className="navbar__cart-list__item__delete-btn text-center"
                        onClick={() => {
                          dispatch(removeBook(book));
                        }}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </div>
                    </div>
                    <div className="d-none d-md-block cart__products-table__item__img-wrapper mx-5">
                      <Link to={`/books/${book._id}`}>
                        <img
                          src={book.imgLink}
                          alt={book.name}
                          className="cart__products-table__item__img"
                        />
                      </Link>
                    </div>
                    <Link
                      to={`/books/${book._id}`}
                      className="my-auto text-decoration-none cart__products-table__item__name playfair"
                    >
                      {book.name}
                    </Link>
                  </div>
                </td>
                <td className="red-text align-middle">${book.price}</td>
                <td className="red-text align-middle">{book.numOfBooks}</td>
                <td className="red-text align-middle">
                  ${book.price * book.numOfBooks}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row className="my-5 font-weight-bold">
        <Col className="d-none d-md-block"></Col>
        <Col>
          <h2 className="playfair">Cart totals</h2>
          <div className="cart__payment-table mb-3">
            <div className="d-flex">
              <div className="cart__payment-table__first-col text-center playfair">
                Subtotal
              </div>
              <div className="cart__payment-table__second-col red-text">
                ${cart.subtotal}
              </div>
            </div>
            <div className="d-flex">
              <div className="cart__payment-table__first-col text-center playfair">
                Total
              </div>
              <div className="cart__payment-table__second-col red-text">
                ${cart.subtotal}
              </div>
            </div>
          </div>
          <button className="cart__checkout-btn">CHECKOUT</button>
        </Col>
      </Row>
    </Container>
  );
};
