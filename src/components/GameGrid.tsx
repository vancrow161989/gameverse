import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponse>("/games", {
        signal: controller.signal
      })
      .then(({ data: { results } }) => setGames(results))
      .catch((err) => setError(err));

    return () => {
      controller.abort();
    };
  }, [games]);

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
