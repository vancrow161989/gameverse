import platformService from "../services/platformService";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll(),
    staleTime: 24 * 16 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, next: null, results: platforms }
  });

export default usePlatforms;
