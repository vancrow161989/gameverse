import create from "./httpService";

export interface Genre {
  id: number;
  name: string;
}

export interface GenresResponse {
  count: number;
  results: Genre[];
}

export default create("/genres");
