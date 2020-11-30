import { Author } from "./Author";

export interface BookDetail {
  _id: string;
  imgLink: string;
  categories: [];
  name: string;
  price: number;
  author: Author;
  description: string;
  rating: number;
  reviews: [];
}