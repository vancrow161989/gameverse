import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";

function GameCard({ game }: { game: Game }) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
