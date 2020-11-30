import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { getSixBooks } from "../../../api/bookAPI";
import { Book } from "../../../models/Book";
import "./Discover.scss";

interface Props {}

export const Discover = (props: Props) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getSixBooks();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      <h2 className="homepage__header playfair text-center">
        <i>Discover</i> Your Next Book
      </h2>
      <hr className="homepage__header__underline" />
      <div className="row">
        {books.map((book) => (
          <div
            key={"discover-" + book._id}
            className="discover__book-card col-12 col-sm-6 col-md-2 text-center px-2"
          >
            <div className="discover__book-card__img-wrapper position-relative">
              <Link to={`/books/${book._id}`}>
                <img
                  src={book.imgLink}
                  alt={book.name}
                  className="discover__book-card__img position-absolute"
                />
              </Link>
            </div>
            <Link
              to={`/books/${book._id}`}
              className="discover__book-card__name text-decoration-none"
            >
              <p className="mt-3">{book.name}</p>
            </Link>
            <p className="discover__book-card__author mb-2">
              {book.author.name}
            </p>
            <p className="discover__book-card__price">${book.price}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
