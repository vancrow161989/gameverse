import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      textAlign={{ base: "center", lg: "right" }}
      padding={{ base: 5, md: 9 }}
      marginTop={{ md: 5 }}>
      <Text>© 2023 Michael Ivan Togeno. All Rights Reserved.</Text>
    </Box>
  );
}

export default Footer;
