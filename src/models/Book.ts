import { Author } from "./Author";
import { Review } from "./Review";

export interface Book {
  _id: string;
  imgLink: string;
  name: string;
  price: number;
  author: Author;
  rating: number;
  reviews: Review[];
}