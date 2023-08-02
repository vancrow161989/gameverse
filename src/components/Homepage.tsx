import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import GenreList from "./GenreList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

function Homepage() {
  return (
    <div className="home">
      <Grid
        paddingX={[4, 4, 8]}
        templateAreas={{
          base: `"content"`,
          lg: `"aside content"`
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr"
        }}>
        <Show above="lg">
          <GridItem area="aside" paddingRight={3}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="content">
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
      ;
    </div>
  );
}

export default Homepage;
