import { HStack, Icon, Link } from "@chakra-ui/react";
import { socialLinks } from "../details";

function Social() {
  return (
    <HStack fontSize={25} spacing={5}>
      {socialLinks.map((val, i) => (
        <Link href={val.link} key={i}>
          <Icon as={val.social} />
        </Link>
      ))}
    </HStack>
  );
}

export default Social;
