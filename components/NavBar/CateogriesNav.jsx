import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "./Link";

 function CateogriesNav ()  {
  const Cateogries = [
    "Top Deals",
    "Deals of the Day",
    "Men",
    "Women",
    "Kids",
    "New",
    "Brands",
    "Brands",
    "Accessories",
    "Sale",
  ];
  return (
    <Flex
      h={{ base: "auto", md: "45px" }}
      backgroundColor={{ md: "#121212" }}
      px={{ base: 5, lg: 20 }}
      my={{ base: 2.5, md: 0 }}
      align="center"
    >
      <Flex
        flexWrap="wrap"
        direction={{ base: "column", md: "row" }}
        className="mx-auto text-lg flex flex-wrap justify-start gap-10 py-6 ml-8 "
      >
        {Cateogries.map((Cateogry, idx) => {
          return (
            <Box
              key={idx}
              my={{ base: 2.5 }}
              mx={{ md: 2, xl: 7 }}
              ms={{ md: idx === 0 ? 0 : 3, xl: idx === 0 ? 0 : 7 }}
            >
              <Link href="/">
            
                  <Text
                    whiteSpace="nowrap"
                    color={
                      Cateogry === "Sale"
                        ? { base: "#B88521", md: "#FFD800" }
                        : { base: "#121212", md: "#FFFFFF" }
                    }
                  >
                    {Cateogry}
                  </Text>
               
              </Link>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default CateogriesNav