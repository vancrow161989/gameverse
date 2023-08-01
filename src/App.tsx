import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Grid
        paddingX={[4, 4, 8]}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr"
        }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingRight={3}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
