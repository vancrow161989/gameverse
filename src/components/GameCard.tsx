import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIcons from "./PlatformIcons";

function GameCard({ game }: { game: Game }) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
