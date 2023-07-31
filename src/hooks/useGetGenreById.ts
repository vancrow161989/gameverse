import useGenres from "./useGenres";

function useGetGenreById(genreId?: number) {
  const { data: genres } = useGenres();
  return genres.results.find((genre) => genre.id === genreId);
}
export default useGetGenreById;
