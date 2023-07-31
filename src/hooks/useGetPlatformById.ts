import usePlatforms from "./usePlatforms";

function useGetPlatformById(platformId?: number) {
  const { data: platforms } = usePlatforms();

  return platforms.results.find((platform) => platform.id === platformId);
}

export default useGetPlatformById;
