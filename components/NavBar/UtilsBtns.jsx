import { Box, Button, Flex } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";

const UtilsBtns = () => {
  return (
    <Box>
      <Flex>
        <Box display={{ base: "none", md: "block" }}>
          <p className="text-secondary font-semibold mt-2">العربية</p>
        </Box>
        <Button variant="unstyled" minW="fit-content" minH="fit-content" mx={3}>
          <CustomIcon w={24} h={24} src="/user.svg" alt="profile" />
        </Button>
        <Button
          variant="unstyled"
          minW="fit-content"
          minH="fit-content"
          mx={3}
          me={{ base: 0, lg: 3 }}
        >
          <CustomIcon w={29} h={28} src="/cart.svg" alt="shopping cart" />
        </Button>
      </Flex>
    </Box>
  );
};
export default UtilsBtns;
