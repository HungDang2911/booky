import React, { useEffect, useState } from 'react';
import './index.scss';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';
import { Details } from './Details/Details';
import { BookDetail } from '../../models/BookDetail';
import { getBookById } from '../../api/bookAPI';
import { DescriptionNReviews } from './DescriptionNReviews/DescriptionNReviews';

interface Props {}

export const BookInfo = (props: Props) => {
  const [book, setBook] = useState<BookDetail>({
    _id: "",
    imgLink: "",
    name: "",
    categories: [],
    price: -1,
    author: "",
    description: "",
    rating: 0,
    reviews: [],
  });

  const [isReload, setReload] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBookById("5f9d90741445af2e1c3c5aa8");
      setBook(response.data);
    };

    fetchBook();
  }, [isReload]);

  return (
    <div>
      <NavigationBar />
      <Details book={book}/>
      <DescriptionNReviews book={book} reload={() => setReload(!isReload)}/>
    </div>
  );
};
