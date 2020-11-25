import { Api } from '.';

export const searchItem = (value: string) => {
  return Api.post('/search', value);
}