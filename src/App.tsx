import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="app">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="teal">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
