import apiClient, { fetchResponse } from "../services/apiClient";
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
    queryFn: () =>
      apiClient.get<fetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 16 * 60 * 1000, // 24hours
    initialData: { count: genres.length, results: genres }
  });
// useData<Genre>("/genres");

export default useGenres;
