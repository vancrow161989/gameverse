import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  console.log("games", games);
  return (
    <>
      {error && <Text> {error}</Text>}
      {isLoading && <Text> Loading Games...</Text>}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
