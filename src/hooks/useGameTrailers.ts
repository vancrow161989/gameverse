import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

interface GameTrailer {
  results: Trailer[];
}

const useGameTrailers = (id?: number) =>
  useQuery({
    queryKey: ["gameTrailer", id],
    queryFn: () => gameService.getTrailer<GameTrailer>(id)
  });

export default useGameTrailers;
