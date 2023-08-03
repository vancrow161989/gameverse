import { GridItem, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../../hooks/useGameScreenshots";
import GameScreenshotsSkeleton from "./GameScreenshotsSkeleton";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const {
    data: gameScreenshots,
    error,
    isLoading
  } = useGameScreenshots(gameId);

  if (isLoading) return <GameScreenshotsSkeleton />;
  if (error || !gameScreenshots) throw error;
  return (
    <SimpleGrid columns={[1, 2]} gap={4} marginY={[6, 45]}>
      {gameScreenshots.results
        .filter((screenshot) => screenshot.is_deleted === false)
        .map((screenshot) => (
          <GridItem key={screenshot.id}>
            <img src={screenshot.image} alt="" />
          </GridItem>
        ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
