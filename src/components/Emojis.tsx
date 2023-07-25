import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Box, Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emojis({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbs up", boxSize: "28px" },
    5: { src: bullsEye, alt: "bulls eye", boxSize: "35px" }
  };

  return (
    <Box paddingY={3}>
      <Image {...emojiMap[rating]} />
    </Box>
  );
}

export default Emojis;
