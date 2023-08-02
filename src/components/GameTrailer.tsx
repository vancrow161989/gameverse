import { Box, Spinner } from "@chakra-ui/react";
import useGameTrailers from "./../hooks/useGameTrailers";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data: gameTrailer, error, isLoading } = useGameTrailers(gameId);

  if (isLoading) return <Spinner></Spinner>;
  if (error || !gameTrailer) throw error;
  const first = gameTrailer.results[0];
  return (
    <Box>
      <video src={first.data.max} poster={first.preview} controls></video>
    </Box>
  );
}

export default GameTrailer;
