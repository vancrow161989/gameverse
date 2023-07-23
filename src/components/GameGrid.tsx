import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

function GameGrid() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/games", {
        signal: controller.signal
      })
      .then(({ data: { results } }) => console.log(results))
      .catch((err) => setError(err));

    return () => {
      controller.abort();
    };
  }, [games]);

  return <div>GameGrid</div>;
}

export default GameGrid;
