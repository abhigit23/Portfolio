import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  color?: string;
  children: string;
  handleClick?: () => void;
}

function CustomButton({ icon, color, children, handleClick }: Props) {
  return (
    <Button colorScheme={color} onClick={handleClick}>
      <Icon as={icon} marginRight={1} />
      {children}
    </Button>
  );
}

export default CustomButton;
