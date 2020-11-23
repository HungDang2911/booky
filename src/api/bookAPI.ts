import { Api } from '.';

export const getBookById = (id: String): any => {
  return Api.get(`/books/${id}`);
};

export const createReview = (id: string, review: any) => {
  return Api.post(`/books/${id}/reviews`, review);
};
