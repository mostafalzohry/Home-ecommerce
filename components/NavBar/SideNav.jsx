import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";
import AllNav from "./AllNav";
import Logo from "./Logo";
import CateogriesNav from "./CateogriesNav";

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        variant="unstyled"
        minW="fit-content"
        minH="fit-content"
      >
        <CustomIcon w={32} h={32} src="/menu.svg" alt="menu" />
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          w="90%"
          h="100svh"
          backgroundColor="white"
          overflowY="auto"
        >
          <DrawerBody>
            <Button
              my={5}
              ms={5}
              variant="unstyled"
              minW="fit-content"
              minH="fit-content"
              onClick={onClose}
            >
              <CustomIcon w={32} h={32} src="/close.svg" alt="close" />
            </Button>
            <Divider />
            <Box ms={5} my={5}>
              <Logo />
              {/* <CateogriesNav /> */}
            </Box>
            <Divider />

            <CateogriesNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideNav;
