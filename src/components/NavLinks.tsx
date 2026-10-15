import { Link, List } from "@chakra-ui/react";
import { links } from "../details";

interface Props {
  onNavigate?: () => void;
}

function NavLinks({ onNavigate }: Props) {
  return (
    <List.Root gap="clamp(6px, 1.5vh, 12px)" variant="plain">
      {links.map(({ name, icon: LinkIcon, link }) => (
        <List.Item key={name} alignItems="center">
          <List.Indicator asChild>
            <LinkIcon />
          </List.Indicator>
          <Link
            href={link}
            color="inherit"
            onClick={onNavigate}
            {...(link.startsWith("http") && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {name}
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default NavLinks;
