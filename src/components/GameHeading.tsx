import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
