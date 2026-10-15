import { useColorModeValue } from "./ui/use-color-mode";

function useSidebarStyle() {
  const [gradientFrom, gradientTo] = useColorModeValue(
    ["green.800", "green.700"],
    ["green.900", "green.800"]
  );
  return { color: "white", bgGradient: "to-t", gradientFrom, gradientTo };
}

export default useSidebarStyle;
