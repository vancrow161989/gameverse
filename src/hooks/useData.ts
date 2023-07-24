import { useState, useEffect } from "react";
import { CanceledError } from "../services/apiClient";
import apiClient from "../services/apiClient";
interface fetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchResponse<T>>(endpoint)
      .then((res) => {
        console.log("genre", res);
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
  }, []);

  return { data, error, isLoading };
}

export default useData;
