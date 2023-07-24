import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(0);

  const handleSelectGenre = (genreId: number) => {
    if (selectedGenre !== genreId) setSelectedGenre(genreId);
  };
  return (
    <div className="app">
      <Grid
        paddingX={10}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr"
        }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingRight={3}>
            <GenreList
              onSelectGenre={handleSelectGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
