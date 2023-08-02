import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  return (
    <Box>
      <Heading as="h6" size="md" marginBottom={4} color="gray.500">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
