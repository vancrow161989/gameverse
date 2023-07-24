import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" paddingY="6">
      <HStack>
        <Image src={logo} boxSize="40px"></Image>
        <Text fontWeight="semibold" fontSize="19px">
          GameVerse
        </Text>
      </HStack>

      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
