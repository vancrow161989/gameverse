import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import PlatformSelectorSkeleton from "./SelectorSkeleton";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (selectedPlatform: Platform) => void;
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data: platforms, error, isLoading } = usePlatforms();

  if (error) return null;
  if (isLoading) return <PlatformSelectorSkeleton />;
  return (
    <>
      <Box marginY={6}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || "Platform"}
          </MenuButton>
          <MenuList>
            {platforms.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}>
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default PlatformSelector;
