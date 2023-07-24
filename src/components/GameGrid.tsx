import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

function GameGrid({ selectedGenre }: Props) {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array.from({ length: 15 }, (_, index) => index);

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
        {games.length < 1 && <Text>No Results Found..</Text>}
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
