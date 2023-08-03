import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import { getCropImage } from "../../services/imageService";
import GenreListSkeleton from "./Game/GenreListSkeleton";
import useGameQueryStore from "../../store/gameQueryStore";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const onSelectGenre = useGameQueryStore((store) => store.setGenreId);

  const skeletons = Array.from({ length: 15 }, (_, index) => index);

  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <>
        <Heading fontSize="2xl" paddingTop={4} paddingBottom={1}>
          Genres
        </Heading>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} marginY={6}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCropImage(genre.image_background)}
              />
              <Button
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                {...(selectedGenreId === genre.id && { color: "green" })}
                onClick={() => onSelectGenre(genre.id)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </>
    </List>
  );
}

export default GenreList;
