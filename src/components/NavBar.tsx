import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack spacing={{ base: "10px", md: "100px" }} paddingY={6}>
      <HStack>
        <HStack w={["40px", null, "145px"]}>
          <Image src={logo} boxSize="40px"></Image>
          <Show above="md">
            <Text fontWeight="semibold" fontSize="19px">
              GameVerse
            </Text>
          </Show>
        </HStack>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
