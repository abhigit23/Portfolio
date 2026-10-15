import { useState } from "react";
import {
  Avatar,
  CloseButton,
  Drawer,
  Flex,
  HStack,
  Heading,
  IconButton,
  Portal,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import Aside from "./Aside";
import useSidebarStyle from "./useSidebarStyle";
import profileImg from "../assets/profile.jpg";
import { profile } from "../details";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const sidebarStyle = useSidebarStyle();

  return (
    <Flex align="center" justify="space-between" gap={3}>
      <HStack gap={3} minWidth={0}>
        <Avatar.Root size="sm">
          <Avatar.Fallback name={profile.name} />
          <Avatar.Image src={profileImg} />
        </Avatar.Root>
        <Heading size="md" truncate>
          {profile.name}
        </Heading>
      </HStack>
      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="end"
        size="xs"
      >
        <Drawer.Trigger asChild>
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            <FaBars />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content {...sidebarStyle}>
              <Drawer.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  color="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                />
              </Drawer.CloseTrigger>
              <Drawer.Body paddingY={10} scrollbar="hidden">
                <Aside onNavigate={() => setOpen(false)} />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Flex>
  );
}

export default MobileHeader;
