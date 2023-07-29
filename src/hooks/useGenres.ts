import ms from "ms";
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
    staleTime: ms("24hr"),
    initialData: { count: genres.length, next: null, results: genres }
  });

export default useGenres;
