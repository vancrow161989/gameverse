import apiClient from "./apiClient";
import { Platform } from "./platformService";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  sortOrder: string;
  searchText: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export default new apiClient<Game>("/games");
