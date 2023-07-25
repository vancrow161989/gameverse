import { Box, Skeleton } from "@chakra-ui/react";

function SelectorSkeleton() {
  return (
    <Box marginY={6}>
      <Skeleton height="40px" width="119px" />
    </Box>
  );
}

export default SelectorSkeleton;
