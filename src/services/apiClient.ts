import axios, { CanceledError } from "axios";

export interface fetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52410a63b9b541a1bca49c22ce523b38"
  }
});

export { CanceledError };
