import React, { useEffect, useState } from 'react';
import './index.scss';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';
import { Details } from './Details/Details';
import { BookDetail } from '../../models/BookDetail';
import { getBookById } from '../../api/bookAPI';
import { DescriptionNReviews } from './DescriptionNReviews/DescriptionNReviews';
import { useParams } from 'react-router-dom';

interface Props {}

export const BookInfo = (props: Props) => {
  const { id } = useParams<{id: string}>();
  const [book, setBook] = useState<BookDetail>({
    _id: "",
    imgLink: "",
    name: "",
    categories: [],
    price: -1,
    author: {
      _id: "",
      name: "",
      latestBook: [],
      description: ""
    },
    description: "",
    rating: 0,
    reviews: [],
  });

  const [isReload, setReload] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      console.log(id);
      const response = await getBookById(id);
      setBook(response.data);
    };

    fetchBook();
  }, [isReload]);

  return (
    <div>
      <Details book={book}/>
      <DescriptionNReviews book={book} reload={() => setReload(!isReload)}/>
    </div>
  );
};
