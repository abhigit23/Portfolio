import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/use-color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch.Root
      colorPalette="green"
      checked={colorMode === "dark"}
      onCheckedChange={toggleColorMode}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Dark Mode</Switch.Label>
    </Switch.Root>
  );
}

export default ColorModeSwitch;
