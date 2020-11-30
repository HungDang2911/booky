import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Container } from "reactstrap";
import { getSixBooks } from "../../../api/bookAPI";
import { Book } from "../../../models/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import "./PickedByReaders.scss";
import { Link } from "react-router-dom";

interface Props {}

export const PickedByReaders = (props: Props) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getSixBooks();
      console.log(response.data);
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <Container>
      <h2 className="homepage__header playfair text-center">
        <i>Picked</i> by Readers
      </h2>
      <hr className="homepage__header__underline" />
      <div className="row">
        {books.map((book) => (
          <div className="picked-by-readers__book-card col-12 col-sm-6 col-md-2 text-center px-2">
            <div className="picked-by-readers__book-card__img-wrapper position-relative">
              <Link to={`/books/${book._id}`}>
                <img
                  src={book.imgLink}
                  alt={book.name}
                  className="picked-by-readers__book-card__img position-absolute"
                />
              </Link>
              <div className="picked-by-readers__book-card__img-layer" />
            </div>
            <Link
              className="text-decoration-none picked-by-readers__book-card__name"
              to={`/books/${book._id}`}
            >
              <p className=" mt-4">{book.name}</p>
            </Link>
            <p className="picked-by-readers__book-card__author mb-1">
              {book.author.name}
            </p>
            <p>
              <Rating
                readonly={true}
                initialRating={book.rating}
                className="picked-by-readers__book-card__rating"
                emptySymbol={<FontAwesomeIcon icon={farStar} />}
                fullSymbol={<FontAwesomeIcon icon={faStar} />}
              />
            </p>
            <p className="picked-by-readers__book-card__reviews">
              {book.reviews.length} Reviews
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};
