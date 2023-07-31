import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../services/gameService";
import useGetPlatformById from "../hooks/useGetPlatformById";
import useGetGenreById from "../hooks/useGetGenreById";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const selectedPlatform = useGetPlatformById(gameQuery.platformId);
  const selectedGenre = useGetGenreById(gameQuery.genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
