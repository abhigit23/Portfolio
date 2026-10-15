import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  color?: string;
  children: string;
  handleClick?: () => void;
}

function CustomButton({ icon: ButtonIcon, color, children, handleClick }: Props) {
  return (
    <Button colorPalette={color} onClick={handleClick}>
      <Icon>
        <ButtonIcon />
      </Icon>
      {children}
    </Button>
  );
}

export default CustomButton;
