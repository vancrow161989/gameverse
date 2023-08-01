import {
  Menu,
  MenuButton,
  Box,
  Button,
  MenuList,
  MenuItem
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store/gameQueryStore";

function SortSelector() {
  const selectedSortOrder = useGameQueryStore(
    (store) => store.gameQuery.sortOrder
  );
  const onSelectSortOrder = useGameQueryStore((store) => store.setSortOrder);

  const sortOrders = [
    { value: "", label: "relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" }
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <>
      <Box marginY={6}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: {currentSortOrder?.label || "Relevance"}
          </MenuButton>
          <MenuList>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.label}
                value={order.value}>
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default SortSelector;
