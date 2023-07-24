import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCropImage } from "../services/imageService";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  const skeletons = Array.from({ length: 15 }, (_, index) => index);

  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {genres.map((genre) => (
        <ListItem key={genre.id} marginY={6}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropImage(genre.image_background)}
            />
            <Button
              variant="link"
              whiteSpace="normal"
              textAlign="left"
              fontSize="lg"
              {...(selectedGenre?.id === genre.id && { color: "green" })}
              onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
