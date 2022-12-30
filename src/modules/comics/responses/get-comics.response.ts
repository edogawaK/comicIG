import { ComicResponseDTO } from '../dto/response/get-comic-response.dto';

export const getComicResponse = (response: ComicResponseDTO) => {
  const { comic, chapters } = response;
  return {
    id: comic.id,
    title: comic.title,
  };
};
