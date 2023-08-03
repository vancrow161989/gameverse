import { Link } from "react-router-dom";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../../../entities/Game";
import { getCropImage } from "../../../services/imageService";
import PlatformIcons from "../Platform/PlatformIcons";
import CriticScore from "../../../components/CriticScore";
import Emojis from "../../../components/Emojis";

function GameCard({ game }: { game: Game }) {
  return (
    <Link to={`/games/${game.slug}`}>
      <Card>
        <Image src={getCropImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom="15px">
            <PlatformIcons
              platforms={game?.parent_platforms?.map(
                ({ platform }) => platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="23px">{game.name}</Heading>
          <Emojis rating={game.rating_top} />
        </CardBody>
      </Card>
    </Link>
  );
}

export default GameCard;
