import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="gold">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
