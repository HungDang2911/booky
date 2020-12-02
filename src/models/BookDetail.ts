import { Author } from "./Author";
import { Review } from "./Review";

export interface BookDetail {
  _id: string;
  imgLink: string;
  categories: [];
  name: string;
  price: number;
  author: Author;
  description: string;
  rating: number;
  reviews: Review[];
}