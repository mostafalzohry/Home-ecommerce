import { Box, Input } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <Box mx={5}>
      <Input
        style={{
          background: `url("/search.svg") no-repeat ${"calc(100% - 32px)"}`,
        }}
        px={8}
        py={4}
        borderRadius="xl"
        placeholder={"Search"}
      />
    </Box>
  );
};
export default SearchInput;
