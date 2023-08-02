import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;

  const limit = 300;
  if (children.length <= limit) return;

  const summary = children.substring(0, limit) + "...";
  return (
    <>
      {expanded ? children : summary}
      <Button
        marginLeft={4}
        size="xs"
        colorScheme="green"
        onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
}

export default ExpandableText;
