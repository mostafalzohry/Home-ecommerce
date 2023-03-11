import { Box, Flex, Text } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";
import Link from "./Link";

const Logo = () => {
  return (
    <Link href='/'>
      
      <Flex>
        <Box pe='5px' minW='fit-content'>
          <CustomIcon
            w={24}
            h={24}
            src='/map.svg'
            alt='store locator'
          />
        </Box>
        <Text whiteSpace='nowrap' fontWeight='semibold'>
          Store Locator
        </Text>
      </Flex>
    
    </Link>
  );
};
export default Logo;
