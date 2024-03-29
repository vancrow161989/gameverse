import { Link } from "react-router-dom";
import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack spacing={{ base: "10px", md: "100px" }} paddingY={6}>
      <HStack>
        <Link to="/">
          <HStack w={["40px", null, "145px"]}>
            <Image
              src={logo}
              boxSize="40px"
              width="auto"
              objectFit="cover"></Image>
            <Show above="md">
              <Text fontWeight="semibold" fontSize="19px">
                GameVerse
              </Text>
            </Show>
          </HStack>
        </Link>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
