import useGames from "../hooks/useGames";
import { Box, Button, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GameCardSkeleton";
import GamecardContainer from "./GamecardContainer";
import { GameQuery } from "../services/gameService";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, index) => index);

  const renderNoResults = () => {
    return (gameQuery.genre || gameQuery.platform || gameQuery.sortOrder) &&
      games?.pages.length === 0 ? (
      <Text paddingLeft={2} paddingTop={5} fontSize="40px">
        No Results Found...
      </Text>
    ) : null;
  };

  if (error) return <Text> {error.message} </Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={{ base: 50, lg: 6, xl: 8 }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer key={skeleton}>
              <GamecardSkeleton />
            </GamecardContainer>
          ))}
        {renderNoResults()}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GamecardContainer key={game.id}>
                <GameCard game={game} />
              </GamecardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Box textAlign="right">
          <Button
            w={"full"}
            colorScheme="teal"
            marginY="40px"
            size="lg"
            variant="solid"
            isLoading={isFetchingNextPage}
            loadingText="Loading..."
            spinner={<Spinner />}
            onClick={() => fetchNextPage()}>
            Load more
          </Button>
        </Box>
      )}
    </>
  );
}

export default GameGrid;
