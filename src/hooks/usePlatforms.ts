import platformService from "../services/platformService";
import Platform from "../entities/Platform";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll<Platform>(),
    staleTime: ms("24hr"),
    initialData: platforms
  });

export default usePlatforms;
