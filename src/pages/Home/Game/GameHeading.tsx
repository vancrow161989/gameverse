import { Heading } from "@chakra-ui/react";
import useGetGenreById from "../../../hooks/useGetGenreById";
import useGameQueryStore from "../../../store/gameQueryStore";
import useGetPlatformById from "../../../hooks/useGetPlatformById";

function GameHeading() {
  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const selectedPlatform = useGetPlatformById(platformId);
  const selectedGenre = useGetGenreById(genreId);

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
