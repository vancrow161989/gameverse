import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

function GameGrid() {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text> {error}</Text>}
      {isLoading && <Text> Loading Games...</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
