import create from "./httpService";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface GamesResponse {
  count: number;
  results: Game[];
}

export default create("/games");
