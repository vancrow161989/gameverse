import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

interface Screenshot {
  id: number;
  image: string;
  is_deleted: boolean;
}

interface Screenshots {
  results: Screenshot[];
}

const useGameScreenshots = (id?: number) =>
  useQuery({
    queryKey: ["screenshots", id],
    queryFn: () => gameService.getScreenshots<Screenshots>(id)
  });

export default useGameScreenshots;
