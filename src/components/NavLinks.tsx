import { Flex, List, ListIcon, ListItem, Link } from "@chakra-ui/react";
import { links } from "../details";

function NavLinks() {
  return (
    <List spacing={3}>
      {links.map((val, i) => (
        <ListItem key={i}>
          <Flex align="center">
            <ListIcon as={val.icon} />
            <Link href={val.link}>{val.name}</Link>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

export default NavLinks;
