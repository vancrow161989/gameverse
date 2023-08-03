import { Grid, GridItem, Stack, Show } from "@chakra-ui/react";

import GameGrid from "../../components/GameGrid";
import GameHeading from "../../components/GameHeading";
import GenreList from "./GenreList";
import PlatformSelector from "../../components/PlatformSelector";
import SortSelector from "../../components/SortSelector";

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
          <Stack direction={["column", "row"]} spacing={[0, 5]}>
            <PlatformSelector />
            <SortSelector />
          </Stack>
          <GameGrid />
        </GridItem>
      </Grid>
      ;
    </div>
  );
}

export default Homepage;
