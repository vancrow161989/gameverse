import { useState, useEffect } from "react";
import { CanceledError } from "../services/apiClient";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";
interface fetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<fetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;