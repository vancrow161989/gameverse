import { Badge } from "@chakra-ui/react";

function CriticScore({ score }: { score: number }) {
  const color = score < 50 ? "red" : score < 75 ? "yellow" : "green";
  return (
    <Badge fontSize="14px" paddingX="10px" paddingY="5px" colorScheme={color}>
      {score || "NR"}
    </Badge>
  );
}

export default CriticScore;
