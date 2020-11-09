import React, { useEffect, useState } from 'react';
import './index.scss';
import { NavigationBar } from '../../common/components/NavigationBar/NavigationBar';
import { Details } from './Details/Details';
import { getBookById } from '../../api/bookAPI';
import { BookDetail } from '../../models/BookDetail';
import { Book } from '../../models/Book';

interface Props {}

export const BookInfo = (props: Props) => {
  const [book, setBook] = useState<BookDetail>({
    _id: '',
    imgLink: '',
    name: '',
    categories: [],
    price: -1,
    author: '',
    rating: 0,
    reviews: 0,
  });

  const [relatedProducts, setRelatedProducts] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBook = async() => {
      const response = await getBookById('5f9d90741445af2e1c3c5aa8');
      setBook(response.data);
    } 

    const fetchRelatedProducts = async() => {
      
    }

    fetchBook();
    fetchRelatedProducts();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Details book={book} />
    </div>
  );
};
