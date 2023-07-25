import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
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
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
