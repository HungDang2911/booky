import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import { getSixBooks } from "../../api/bookAPI";
import { RootState } from "../../app/rootReducer";
import { BookDetail } from "../../models/BookDetail";
import { BooksList } from "./BooksList/BooksList";
import Filters from "./Filters/Filters";

export interface Props {}

export function Books(props: Props) {
  const [booksListData, setBooksListData] = useState<BookDetail[]>([]);
  const [booksList, setBooksList] = useState<BookDetail[]>([]);

  const handleApplyFilter = (
    lowerPriceBound: number,
    upperPriceBound: number
  ) => {
    const newBookList = booksListData.filter(
      (book) => book.price >= lowerPriceBound && book.price <= upperPriceBound
    );
    setBooksList(newBookList);
  };

  useEffect(() => {
    const fetchBooksList = async () => {
      const response = await getSixBooks();
      setBooksList(response.data);
      setBooksListData(response.data);
    };

    fetchBooksList();
  }, []);

  return (
    <Container className="d-flex flex-column-reverse flex-lg-row">
      <Filters
        changePriceFilter={(lowerBound, upperBound) => {
          handleApplyFilter(lowerBound, upperBound);
        }}
      />
      <BooksList booksList={booksList} />
    </Container>
  );
}
