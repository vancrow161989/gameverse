import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <ListItem marginY={6}>
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText width="60%" noOfLines={1} fontSize="lg" />
      </HStack>
    </ListItem>
  );
}

export default GenreListSkeleton;
