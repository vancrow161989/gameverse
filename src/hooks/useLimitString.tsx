import { Button } from "@chakra-ui/react";
import { useState } from "react";

function useLimitString() {
  const [isReadMore, setReadMore] = useState(false);
  const limit = 350;

  const limitString = (text: string) => {
    if (text.length <= limit) return text;

    return (
      <>
        {isReadMore ? text : text.substring(0, limit) + "..."}
        <Button
          marginLeft={4}
          colorScheme="green"
          onClick={() => setReadMore((prev) => !prev)}>
          {isReadMore ? "Show Less" : "Read More"}
        </Button>
      </>
    );
  };

  return { limitString };
}

export default useLimitString;
