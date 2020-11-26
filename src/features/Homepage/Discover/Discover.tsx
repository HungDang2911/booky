import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Book } from "../../../models/Book";
import "./Discover.scss";

interface Props {}

export const Discover = (props: Props) => {
  const mockBook: Book = {
    _id: "",
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._AC_SY400_.jpg",
    name: "How to win friends & influence people",
    author: "Dale Carnegie",
    price: 5.05,
    reviews: 0,
    rating: 4.0,
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
        <i>Discover</i> Your Next Book
      </h2>
      <hr className="homepage__header__underline" />
      <div className="row">
        {books.map((book) => (
          <div className="discover__book-card col-12 col-sm-6 col-md-2 text-center px-2">
            <img
              src={book.imgLink}
              alt={book.name}
              className="discover__book-card__img img-fluid"
            />
            <Link
              to={`/books/${book._id}`}
              className="discover__book-card__name text-decoration-none"
            >
              <p className="mt-3">{book.name}</p>
            </Link>
            <p className="discover__book-card__author mb-1">{book.author}</p>
            <p className="discover__book-card__price">${book.price}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
