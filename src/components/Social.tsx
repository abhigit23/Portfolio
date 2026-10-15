import { HStack, Icon, Link } from "@chakra-ui/react";
import { socialLinks } from "../details";

function Social() {
  return (
    <HStack fontSize={25} gap={5}>
      {socialLinks.map(({ social: SocialIcon, link }) => (
        <Link
          href={link}
          key={link}
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <SocialIcon />
          </Icon>
        </Link>
      ))}
    </HStack>
  );
}

export default Social;
