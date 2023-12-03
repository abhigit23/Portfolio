import { Divider, Flex } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import CustomButton from "./CustomButton";
import NavLinks from "./NavLinks";
import Profile from "./Profile";
import Social from "./Social";
import { FaPaperPlane } from "react-icons/fa";

function Aside() {
  return (
    <Flex direction="column" align="center" gap={5}>
      <Profile />
      <Social />
      <Divider />
      <NavLinks />
      <CustomButton color="green" icon={FaPaperPlane}>
        Hire Me
      </CustomButton>
      <Divider />
      <ColorModeSwitch />
    </Flex>
  );
}

export default Aside;
