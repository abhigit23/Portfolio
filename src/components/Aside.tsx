import { Flex, Separator } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import CustomButton from "./CustomButton";
import NavLinks from "./NavLinks";
import Profile from "./Profile";
import Social from "./Social";
import { FaPaperPlane } from "react-icons/fa";
import { profile } from "../details";

interface Props {
  onNavigate?: () => void;
}

function Aside({ onNavigate }: Props) {
  const hireMe = () => {
    window.location.href = `mailto:${profile.email}`;
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="full"
      gap="clamp(10px, 2.4vh, 20px)"
    >
      <Profile />
      <Social />
      <Separator alignSelf="stretch" borderColor="whiteAlpha.500" />
      <NavLinks onNavigate={onNavigate} />
      <CustomButton color="gray" icon={FaPaperPlane} handleClick={hireMe}>
        Hire Me
      </CustomButton>
      <Separator alignSelf="stretch" borderColor="whiteAlpha.500" />
      <ColorModeSwitch />
    </Flex>
  );
}

export default Aside;
