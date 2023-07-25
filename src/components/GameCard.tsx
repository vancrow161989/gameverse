import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { getCropImage } from "../services/imageService";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";

function GameCard({ game }: { game: Game }) {
  return (
    <Card>
      <Image src={getCropImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom="15px">
          <PlatformIcons
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="19px">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
