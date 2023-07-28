import genreService from "../services/genreService";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll(),
    staleTime: 24 * 16 * 60 * 1000, // 24hours
    initialData: { count: genres.length, next: null, results: genres }
  });
// useData<Genre>("/genres");

export default useGenres;
