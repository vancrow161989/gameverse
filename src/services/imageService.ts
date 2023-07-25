export function getCropImage(imageUrl: string) {
  if (!imageUrl) return "https://placehold.co/600x400";
  const target = "media/";
  const index = imageUrl.indexOf(target) + target.length;
  return imageUrl.slice(0, index) + `crop/600/400/` + imageUrl.slice(index);
}
