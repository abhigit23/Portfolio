import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  color?: string;
  children: string;
}

function CustomButton({ icon, color, children }: Props) {
  return (
    <Button colorScheme={color}>
      <Icon as={icon} marginRight={1} />
      {children}
    </Button>
  );
}

export default CustomButton;
