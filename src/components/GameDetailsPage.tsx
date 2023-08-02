import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import useGameTrailers from "../hooks/useGameTrailers";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

function GameDetailsPage() {
  const { slug } = useParams();

  const { data: gameDetails, error, isLoading } = useGameDetails(slug);
  const { data: gameTrailer } = useGameTrailers(gameDetails?.id);

  console.log("game", gameDetails);
  console.log("trailer", gameTrailer);

  if (isLoading) return <Spinner></Spinner>;
  if (error || !gameDetails) throw error;

  return (
    <Grid
      gap={45}
      paddingX={[4, 4, 8]}
      templateAreas={{
        base: `"left" "right"`,
        lg: `"left right"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr"
      }}>
      <GridItem area="left">
        <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
          {gameDetails.name}
        </Heading>
        <Text fontSize="xl">
          <ExpandableText>{gameDetails.description_raw}</ExpandableText>
        </Text>
        <GameAttributes gameDetails={gameDetails} />
      </GridItem>
      <GridItem area="right">
        <GameTrailer gameId={gameDetails.id} />
        <GameScreenshots gameId={gameDetails.id} />
      </GridItem>
    </Grid>
  );
}

export default GameDetailsPage;
