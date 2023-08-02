import apiClient, { Genre } from "./apiClient";
import { Platform } from "./platformService";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

interface Publisher {
  id: number;
  name: string;
}

export interface GameDetailsType extends Game {
  name: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}

export default new apiClient("/games");
