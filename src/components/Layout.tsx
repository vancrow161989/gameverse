import { Grid, GridItem } from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="main">
        <Grid
          paddingX={[4, 4, 8]}
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav" "main"`
          }}
          templateColumns={{
            base: "1fr",
            lg: "1fr"
          }}>
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem area="main">
            <Outlet />
          </GridItem>
        </Grid>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
