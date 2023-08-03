import { SimpleGrid, GridItem, Skeleton } from "@chakra-ui/react";

function GameScreenshotsSkeleton() {
  return (
    <SimpleGrid columns={[1, 2]} gap={4} marginY={[6, 45]}>
      <GridItem>
        <Skeleton height="239px" />
      </GridItem>
      <GridItem>
        <Skeleton height="239px" />
      </GridItem>
      <GridItem>
        <Skeleton height="239px" />
      </GridItem>
      <GridItem>
        <Skeleton height="239px" />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameScreenshotsSkeleton;
