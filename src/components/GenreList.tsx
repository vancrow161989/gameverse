import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <div>
      GenreList
      {genres.map((genre) => (
        <p key={genre.id}> {genre.name}</p>
      ))}
    </div>
  );
}

export default GenreList;
