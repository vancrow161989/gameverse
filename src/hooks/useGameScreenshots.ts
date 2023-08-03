import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";
import Screenshots from "../entities/Screenshots";

const useGameScreenshots = (id?: number) =>
  useQuery({
    queryKey: ["screenshots", id],
    queryFn: () => gameService.getScreenshots<Screenshots>(id)
  });

export default useGameScreenshots;
