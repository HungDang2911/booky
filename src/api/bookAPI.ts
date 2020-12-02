import { Api } from ".";

export const getBookById = (id: String): any => {
  return Api.get(`/books/${id}`);
};

export const createReview = (id: string, review: any) => {
  return Api.post(`/books/${id}/reviews`, review);
};

export const searchBook = (name: string) => {
  return Api.post(
    `/books/search`,
    {},
    {
      params: {
        name,
      },
    }
  );
};

export const getOneBook = () => {
  return Api.get("/books/random/one-book");
};

export const getFourBooks = () => {
  return Api.get("/books/random/four-books");
};

export const getSixBooks = () => {
  return Api.get("/books/random/six-books");
};
