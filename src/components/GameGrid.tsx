import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const {
    data: games,
    error,
    isLoading
  } = useGames(selectedGenre, selectedPlatform);
  const skeletons = Array.from({ length: 15 }, (_, index) => index);

  const renderNoResults = () => {
    return selectedGenre && selectedPlatform && games.length === 0 ? (
      <Text>No Results Found..</Text>
    ) : null;
  };

  if (error) return null;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer key={skeleton}>
              <GamecardSkeleton />
            </GamecardContainer>
          ))}
        {renderNoResults()}
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
