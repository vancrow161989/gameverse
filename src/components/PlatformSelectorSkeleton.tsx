import { Box, Skeleton } from "@chakra-ui/react";

function PlatformSelectorSkeleton() {
  return (
    <Box marginY={6}>
      <Skeleton height="40px" width="119px" />
    </Box>
  );
}

export default PlatformSelectorSkeleton;
