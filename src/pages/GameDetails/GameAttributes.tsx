import { Box, HStack, List, ListItem } from "@chakra-ui/react";
import CriticScore from "../../components/CriticScore";
import DefinitionItem from "../../components/DefinitionItem";
import Game from "./../../entities/Game";

interface Props {
  gameDetails: Game;
}

function GameAttributes({ gameDetails }: Props) {
  return (
    <HStack
      direction={["column", "row"]}
      alignItems="start"
      marginY={8}
      flexWrap="wrap">
      <Box w="48%" marginBottom={10} as="dl">
        <DefinitionItem term="Platforms">
          <List>
            {gameDetails.parent_platforms.map(({ platform }) => (
              <ListItem key={platform.id}>{platform.name}</ListItem>
            ))}
          </List>
        </DefinitionItem>
      </Box>
      <Box w="48%" marginBottom={10}>
        <DefinitionItem term="Metascore">
          <CriticScore score={gameDetails?.metacritic || 0} />
        </DefinitionItem>
      </Box>

      <Box w="48%">
        <DefinitionItem term="Genres">
          <List>
            {gameDetails.genres.map((genre) => (
              <ListItem key={genre.id}>{genre.name}</ListItem>
            ))}
          </List>
        </DefinitionItem>
      </Box>
      <Box w="48%">
        <DefinitionItem term=" Publishers">
          <List>
            {gameDetails.publishers.map((publisher) => (
              <ListItem key={publisher.id}>{publisher.name}</ListItem>
            ))}
          </List>
        </DefinitionItem>
      </Box>
    </HStack>
  );
}

export default GameAttributes;
