import { Author } from "./Author";

export interface Book {
  _id: string;
  imgLink: string;
  name: string;
  price: number;
  author: Author;
  rating: number;
  reviews: [];
}