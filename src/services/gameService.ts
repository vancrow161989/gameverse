import apiClient from "./apiClient";
import { Platform } from "./platformService";
import { Genre } from "./genreService";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
