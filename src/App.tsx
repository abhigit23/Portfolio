import { Box, Grid, GridItem } from "@chakra-ui/react";
import Aside from "./components/Aside";
import Main from "./components/Main";
import MobileHeader from "./components/MobileHeader";
import useSidebarStyle from "./components/useSidebarStyle";

function App() {
  const sidebarStyle = useSidebarStyle();

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav main"` }}
      templateColumns={{
        base: "minmax(0, 1fr)",
        lg: "250px minmax(0, 1fr)",
      }}
    >
      <GridItem
        {...sidebarStyle}
        area="nav"
        paddingX={{ base: 4, lg: 5 }}
        paddingY={{ base: 2, lg: 5 }}
        position="sticky"
        top={0}
        zIndex="sticky"
        height={{ lg: "100vh" }}
        overflowY={{ lg: "auto" }}
        scrollbar="hidden"
      >
        <Box hideFrom="lg">
          <MobileHeader />
        </Box>
        <Box hideBelow="lg" height="full">
          <Aside />
        </Box>
      </GridItem>
      <GridItem area="main" padding={{ base: 4, md: 5 }}>
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
