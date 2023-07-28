import axios, { AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52410a63b9b541a1bca49c22ce523b38"
  }
});

class apiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default apiClient;
