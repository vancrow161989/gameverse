import ms from "ms";
import genreService from "../services/genreService";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => genreService.getAll<Genre>(),
    staleTime: ms("24hr"),
    initialData: genres
  });

export default useGenres;
