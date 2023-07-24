import { useState } from "react";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCropImage } from "../services/imageService";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenre: number;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  const skeletons = Array.from({ length: 15 }, (value, index) => index);

  if (error) return null;
  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {genres.map((genre) => (
        <ListItem key={genre.id} marginY={6}>
          <HStack onClick={() => onSelectGenre(genre.id)} cursor="pointer">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropImage(genre.image_background)}
            />
            <Text
              fontSize="lg"
              {...(selectedGenre === genre.id && { color: "green" })}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
