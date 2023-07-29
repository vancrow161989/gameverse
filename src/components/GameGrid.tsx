import useGames from "../hooks/useGames";
import { Box, SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
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

  const fetchGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text> {error.message} </Text>;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchGamesCount}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <Box textAlign="center">
            <Spinner marginY="30px" textAlign="center" size="xl" />
          </Box>
        }
        endMessage={
          <Text textAlign="center" fontSize="3xl" marginY={25}>
            Yay! You have seen it all
          </Text>
        }>
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
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
