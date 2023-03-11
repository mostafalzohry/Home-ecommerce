import { Box, Flex } from "@chakra-ui/react";
import SideNav from "./SideNav";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import UtilsBtns from "./UtilsBtns";

function SearchNav() {
  return (
    <>
      <Flex
        py={{ base: "10px", md: "25px" }}
        px={{ base: 5, lg: 20 }}
        justify="space-between"
        align="center"
      >
        <Box display={{ base: "none", md: "block" }}>
          <Logo />
        </Box>
        <Box w="100%" maxW={752} display={{ base: "none", md: "block" }}>
          <SearchInput />
        </Box>
        <Box display={{ base: "block", md: "none" }} me="auto">
          <SideNav />
        </Box>
        <UtilsBtns />
      </Flex>
      <Box w="100%" display={{ base: "block", md: "none" }}>
        <SearchInput />
      </Box>
    </>
  );
}

export default SearchNav;
