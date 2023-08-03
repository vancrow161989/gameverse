import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";
import GameTrailer from "../entities/GameTrailer";

const useGameTrailers = (id?: number) =>
  useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: () => gameService.getTrailer<GameTrailer>(id)
  });

export default useGameTrailers;
