import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  const bg = useColorModeValue(
    "linear(to-t,  green.300, green.400)",
    "linear(to-t, green.400, green.500)"
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav main"` }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem color="white" bgGradient={bg} area={`nav`} padding={5}>
        <Aside />
      </GridItem>
      <GridItem area={`main`} padding={5}>
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
