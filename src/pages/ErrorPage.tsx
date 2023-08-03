import { Grid, GridItem, Heading, Show, Text } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import GenreList from "./Home/GenreList";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const renderErrorHTML = () => {
    return isRouteErrorResponse(error) ? (
      <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
        Invalid Page
      </Heading>
    ) : (
      <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
        Unexpected Error
      </Heading>
    );
  };
  const error = useRouteError();

  return (
    <>
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
          {renderErrorHTML()}
          <Link to="/" replace={true}>
            <Text color="blue" as="u">
              Back to homepage
            </Text>
          </Link>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}

export default ErrorPage;
