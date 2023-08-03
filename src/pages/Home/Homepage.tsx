import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GenreList from "./GenreList";
import GameHeading from "./Game/GameHeading";
import PlatformSelector from "./Platform/PlatformSelector";
import SortSelector from "../../components/SortSelector";
import GameGrid from "./Game/GameGrid";

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
    </div>
  );
}

export default Homepage;
