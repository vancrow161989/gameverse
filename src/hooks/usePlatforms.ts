import platformService from "../services/platformService";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    staleTime: ms("24hr"),
    initialData: { count: platforms.length, next: null, results: platforms }
  });

export default usePlatforms;
