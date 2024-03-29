import axios, { AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52410a63b9b541a1bca49c22ce523b38"
  }
});

class apiClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = <T>(config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getDetailsById = <T>(slug?: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then((res) => res.data);
  };

  getTrailer = <T>(id?: number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}/movies`)
      .then((res) => res.data);
  };

  getScreenshots = <T>(id?: number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}/screenshots`)
      .then((res) => res.data);
  };
}

export default apiClient;
