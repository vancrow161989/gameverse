import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gameService, { GameDetailsType } from "../services/gameService";
const useGameDetails = (slug?: string) =>
  useQuery({
    queryKey: slug ? ["game", slug] : ["game"],
    queryFn: () => gameService.getDetailsById<GameDetailsType>(slug),
    staleTime: ms("24hr")
  });

export default useGameDetails;
