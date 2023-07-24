import create from "./httpService";

export interface Game {
  id: number;
  name: string;
}

export interface GamesResponse {
  count: number;
  results: Game[];
}

export default create("/games");
