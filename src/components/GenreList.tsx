import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, error, isLoading } = useGenres();
  return (
    <div>
      GenreList
      {genres.map((genre) => (
        <p> {genre.name}</p>
      ))}
    </div>
  );
}

export default GenreList;
