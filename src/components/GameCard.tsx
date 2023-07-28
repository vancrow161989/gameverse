import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import { getCropImage } from "../services/imageService";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import Emojis from "./Emojis";

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
        <Heading fontSize="23px">{game.name}</Heading>
        <Emojis rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
