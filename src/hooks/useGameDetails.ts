import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gameService from "../services/gameService";
import Game from "../entities/Game";

const useGameDetails = (slug?: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => gameService.getDetailsById<Game>(slug),
    staleTime: ms("24hr")
  });

export default useGameDetails;
