import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";

function GameGrid({ selectedGenre }: { selectedGenre: number }) {
  const { data: games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 15 }, (value, index) => index);
  const filteredGames = selectedGenre
    ? games.filter((game) => game.genres.find((g) => g.id === selectedGenre))
    : games;

  // console.log("selected", selectedGenre, games, "filtered", filteredGames);

  if (error) return null;
  return (
    <>
      {error && <Text> {error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer key={skeleton}>
              <GamecardSkeleton />
            </GamecardContainer>
          ))}
        {filteredGames.length < 1 && <Text>No Results Found..</Text>}
        {filteredGames.map((game) => (
          <GamecardContainer key={game.id}>
            <GameCard game={game} />
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
