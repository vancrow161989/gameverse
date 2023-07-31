import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../services/gameService";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const selectedGenre = genres.results.find(
    (genre) => genre.id === gameQuery.genreId
  );

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
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
