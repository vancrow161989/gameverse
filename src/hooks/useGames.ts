import { useState, useEffect } from "react";
import { CanceledError } from "../services/apiClientService";
import gameService, { Game, GamesResponse } from "../services/gameService";

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = gameService.getAll<GamesResponse>();
    setLoading(true);
    request
      .then((res) => {
        setGames(res.data.results);
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

  return { games, error, isLoading };
}

export default useGames;
