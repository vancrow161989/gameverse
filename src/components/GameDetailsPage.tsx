import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  ListItem,
  List,
  HStack
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import CriticScore from "./CriticScore";
import ExpandableText from "./ExpandableText";

function GameDetailsPage() {
  const { slug } = useParams();

  const { data: gameDetails } = useGameDetails(slug);
  console.log(gameDetails);
  return (
    <Grid
      paddingX={[4, 4, 8]}
      templateAreas={{
        base: `"nav" "left right"`,
        lg: `"left right"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr"
      }}>
      <GridItem area="left">
        <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
          {gameDetails?.name}
        </Heading>
        {gameDetails?.description_raw && (
          <>
            <Text fontSize="xl">
              <ExpandableText>{gameDetails?.description_raw}</ExpandableText>
            </Text>
          </>
        )}

        <HStack
          direction={["column", "row"]}
          alignItems="start"
          marginY={8}
          flexWrap="wrap">
          <Box w="48%" marginBottom={10}>
            <Heading as="h6" size="md" marginBottom={4}>
              Platforms
            </Heading>
            <List>
              {gameDetails?.parent_platforms.map(({ platform }) => (
                <ListItem>{platform.name}</ListItem>
              ))}
            </List>
          </Box>
          <Box w="48%">
            <Heading as="h6" size="md" alignItems="start" marginBottom={4}>
              Metascore
            </Heading>
            <CriticScore score={gameDetails?.metacritic || 0} />
          </Box>
          <Box w="48%">
            <Heading as="h6" size="md" alignItems="start" marginBottom={4}>
              Genres
            </Heading>
            <List>
              {gameDetails?.genres.map((genre) => (
                <ListItem>{genre.name}</ListItem>
              ))}
            </List>
          </Box>
          <Box w="48%">
            <Heading as="h6" size="md" alignItems="start" marginBottom={4}>
              Publishers
            </Heading>
            <List>
              {gameDetails?.publishers.map((publisher) => (
                <ListItem>{publisher.name}</ListItem>
              ))}
            </List>
          </Box>
        </HStack>
      </GridItem>
      <GridItem area="right"></GridItem>
    </Grid>
  );
}

export default GameDetailsPage;
