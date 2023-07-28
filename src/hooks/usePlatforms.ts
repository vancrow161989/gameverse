import apiClient, { fetchResponse } from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 16 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;

// useData<Platform>("/platforms/lists/parents");
