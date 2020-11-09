import { Api } from ".";

export const getBookById = (id: String):any => {
  return Api.get(`/books/${id}`);
}