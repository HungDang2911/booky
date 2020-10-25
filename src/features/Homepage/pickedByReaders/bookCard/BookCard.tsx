import React from 'react';
import { Book } from '../PickedByReaders';
import { Link } from "react-router-dom";
import "./BookCard.scss";

interface Props {
  book: Book
}

export const BookCard = (props: Props) => {
  return (
    <div className="picked-by-readers__book-card">
      <Link to={props.book.imgLink}>
        <img src={props.book.imgLink} />
      </Link>
      <Link to ="">

      </Link>
    </div>
  )
}
