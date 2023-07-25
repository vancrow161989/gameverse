import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { getCropImage } from "../services/imageService";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";

function GameCard({ game }: { game: Game }) {
  if (!game.background_image) return;
  return (
    <Card>
      <Image src={getCropImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
