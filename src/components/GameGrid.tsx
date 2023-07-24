import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";

function GameGrid() {
  const { data: games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 15 }, (value, index) => index);

  if (error) return null;
  return (
    <>
      {error && <Text> {error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer key={skeleton}>
              <GamecardSkeleton />
            </GamecardContainer>
          ))}
        {games.map((game) => (
          <GamecardContainer key={game.id}>
            <GameCard game={game} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
