import { Box } from "@chakra-ui/react";
import CateogriesNav from "./CateogriesNav";
import WhiteFriday  from "./WhiteFriday";
import SearchNav from "./SearchNav";


function AllNav() {
  return (
    <>
      <WhiteFriday />
      <SearchNav />
      <Box display={{ base: "none", md: "block" }}>
        <CateogriesNav />
      </Box>
    </>
  );
};


export default AllNav