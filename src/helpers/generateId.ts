import { v4 as uuid } from 'uuid';

export const generateID = (): string => {
  const id = uuid().replaceAll('-', '');
  console.log(id);
  return id;
};
