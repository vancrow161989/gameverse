import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";
import useGameQueryStore from "../../../store/gameQueryStore";
import usePlatforms from "../../../hooks/usePlatforms";

function PlatformSelector() {
  const { data: platforms, error, isLoading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );
  const onSelectPlatform = useGameQueryStore((store) => store.setPlatformId);
  const currentPlatform = platforms.results?.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return null;
  if (isLoading) return <PlatformSelectorSkeleton />;
  return (
    <>
      <Box marginY={[0, 6]}>
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
