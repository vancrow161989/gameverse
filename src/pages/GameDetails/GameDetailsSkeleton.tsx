import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  SkeletonText,
  Text
} from "@chakra-ui/react";

function GameDetailsSkeleton() {
  return (
    <>
      <Grid
        gap={[5, 45]}
        paddingX={[4, 4, 8]}
        templateAreas={{
          base: `"left" "right"`,
          lg: `"left right"`
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr"
        }}>
        <GridItem area="left">
          <Heading as="h1" paddingY={3} fontSize={{ base: "3xl", lg: "5xl" }}>
            <SkeletonText
              mb="4"
              noOfLines={1}
              skeletonHeight="81px"
              width="500px"></SkeletonText>
          </Heading>
          <Text fontSize="xl">
            <SkeletonText noOfLines={4} skeletonHeight="5"></SkeletonText>
          </Text>
          <HStack
            direction={["column", "row"]}
            alignItems="start"
            marginY={8}
            flexWrap="wrap">
            <Box w="48%" marginBottom={10} as="dl">
              <Heading as="h6" size="md" marginBottom={4} color="gray.500">
                <SkeletonText
                  mb="6"
                  noOfLines={1}
                  skeletonHeight="24px"
                  width="120px"
                />
              </Heading>
              <dd>
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="70px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="50px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="80px"
                />
              </dd>
            </Box>

            <Box w="48%" marginBottom={10} as="dl">
              <Heading as="h6" size="md" marginBottom={4} color="gray.500">
                <SkeletonText
                  mb="6"
                  noOfLines={1}
                  skeletonHeight="24px"
                  width="120px"
                />
              </Heading>
              <dd>
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="70px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="50px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="80px"
                />
              </dd>
            </Box>

            <Box w="48%" marginBottom={10} as="dl">
              <Heading as="h6" size="md" marginBottom={4} color="gray.500">
                <SkeletonText
                  mb="6"
                  noOfLines={1}
                  skeletonHeight="24px"
                  width="120px"
                />
              </Heading>
              <dd>
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="70px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="50px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="80px"
                />
              </dd>
            </Box>

            <Box w="48%" marginBottom={10} as="dl">
              <Heading as="h6" size="md" marginBottom={4} color="gray.500">
                <SkeletonText
                  mb="6"
                  noOfLines={1}
                  skeletonHeight="24px"
                  width="120px"
                />
              </Heading>
              <dd>
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="70px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="50px"
                />
                <SkeletonText
                  mb="3"
                  noOfLines={1}
                  skeletonHeight="12px"
                  width="80px"
                />
              </dd>
            </Box>
          </HStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default GameDetailsSkeleton;
