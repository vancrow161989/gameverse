import { useState, useEffect } from "react";
import genreService, { Genre, GenresResponse } from "../services/genreService";
import { CanceledError } from "../services/apiClientService";

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = genreService.getAll<GenresResponse>();

    setLoading(true);
    request
      .then((res) => {
        console.log("genre", res);
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;
