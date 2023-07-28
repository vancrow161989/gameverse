import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchResponse } from "../services/apiClient";
import gameService, { GameQuery, Game } from "../services/gameService";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
    staleTime: 24 * 16 * 60 * 1000, // 24hours
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  });

export default useGames;
