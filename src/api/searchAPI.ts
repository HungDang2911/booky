import { Api } from '.';

export const searchBook = (value: string) => {
  return Api.post('/search', value);
}