import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platformService";
import { BsChevronDown } from "react-icons/bs";
import PlatformSelectorSkeleton from "./SelectorSkeleton";

interface Props {
  selectedPlatformId: number | null;
  onSelectPlatform: (selectedPlatformId: number) => void;
}

function PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
  const { data: platforms, error, isLoading } = usePlatforms();

  const currentPlatform = platforms.results?.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return null;
  if (isLoading) return <PlatformSelectorSkeleton />;
  return (
    <>
      <Box marginY={6}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {currentPlatform?.name || "Platform"}
          </MenuButton>
          <MenuList>
            {platforms?.results.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectPlatform(platform.id)}>
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
