import { FormEvent, useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store/gameQueryStore";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((store) => store.setSearchText);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          fontSize={22}
          marginTop={1}
          marginLeft={2}
          children={<BsSearch />}
        />
        <Input
          ref={ref}
          size="lg"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
